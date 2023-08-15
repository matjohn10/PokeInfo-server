const nodemailer = require("nodemailer");
const path = require("path");
const { promisify } = require("util");
const handlebars = require("handlebars");
const fs = require("fs");
const dotenv = require("dotenv");
dotenv.config();
const { google } = require("googleapis");
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const oAuth2Client = new google.auth.OAuth2(
  process.env.AUTH_CLIENTID,
  process.env.AUTH_CLIENT_SECRET,
  REDIRECT_URI
);
const readFile = promisify(fs.readFile);
const HTML = require("../views/joinedEmail");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
    clientId: process.env.AUTH_CLIENTID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    accessToken: process.env.AUTH_ACCESS_TOKEN,
    refreshToken: process.env.AUTH_REFRESH_TOKEN,
  },
});

const sendEmailNewsletter = async (toEmail) => {
  // toEmail = "math123@mailinator.com";

  const messageEmail = {
    from: process.env.EMAIL_ADDRESS,
    to: toEmail,
    subject: "Welcome to PokeInfo's Newsletter!",
    text: "Welcome!\n\nPokeInfo's Developer,\nMathieu Johnson",
    html: HTML,
  };
  transporter.sendMail(messageEmail, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sent: " + info);
    }
  });
};

const sendEmailForgot = async (toEmail, what, data) => {
  const messageEmail = {
    from: process.env.EMAIL_ADDRESS,
    to: toEmail,
    subject: "You forgot your " + what,
    text:
      "Here is your " +
      what +
      ":\n\n" +
      data +
      "\n\nTry logging back in on PokeInfo!",
  };
  await transporter.sendMail(messageEmail);
  console.log("Email Sent");
};

module.exports = { sendEmailNewsletter, sendEmailForgot };
