const express = require("express");
const router = express.Router();
const { sendEmailNewsletter } = require("../utils/sendEmail");
const { storeEmails } = require("../utils/utilsDB");
const path = require("path");

router.post("/add-newsletter", async (req, res) => {
  const email = req.body["newsletter-email"];
  //deal with email
  const alreadyAdded = await storeEmails(email);
  if (alreadyAdded) {
    res.sendFile(path.join(__dirname, "../views/newsletterAlreadyUser.html"));
  } else {
    sendEmailNewsletter(email);
    res.sendFile(path.join(__dirname, "../views/newsletter.html"));
  }
});

router.post("/unsubscribe", (req, res) => {
  res.send("Unsubscribed");
});

module.exports = router;
