const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const generator = require("generate-password");
const bcrypt = require("bcrypt");
const {
  storeNewUser,
  getUserPwd,
  getUserForgotPwd,
  resetUserPwd,
  getUserInfo,
  saveNewTeam,
  getUserTeams,
  deleteUserTeam,
} = require("../utils/utilsDB");
const { sendEmailForgot } = require("../utils/sendEmail");
const path = require("path");

router.post("/login", async (req, res) => {
  const username = req.body["username"];
  const password = req.body["password"];
  const storedPwd = await getUserPwd(username);
  // Handle login
  if (storedPwd) {
    const isValidPassword = await bcrypt.compare(password, storedPwd);
    // Get user info from MONGODB and
    // send the user info as USER OBJ and use that during login
    const user = await getUserInfo(username);
    const token = jwt.sign(
      { username: username, password: storedPwd },
      process.env.ACCESS_CLIENT_SECRET
    );
    if (isValidPassword)
      res.json({ status: 200, user: token, data: JSON.stringify(user) });
    else {
      res.json({ status: 204, user: false }); // empty content -> no password
    }
  } else {
    res.json({ status: 404, user: false }); // full not found -> no username matching
  }
});

router.post("/signup", async (req, res) => {
  // Hash password before giving to storage, DO IT IN THIS CURRENT FUNCTION
  const user = {
    email: req.body.email,
    birthday: req.body.birthday,
    username: req.body.username,
    password: await bcrypt.hash(req.body.password, 10),
  };
  //Handle signup
  const wasNewAccount = await storeNewUser(user);
  if (wasNewAccount) {
    res.json({ status: 201, added: true }); // ressource created
  } else {
    res.json({ status: 404, added: false }); // already user with that email
  }
});

router.post("/forgot", async (req, res) => {
  const fetchedData = await getUserForgotPwd(
    req.body.email,
    req.body.birthday,
    req.body.toFetch
  );
  if (!fetchedData) {
    res.json({ status: 404, fetched: false });
  } else {
    const toFetch = req.body.toFetch;
    const tempPwd = generator.generate({
      length: 5,
      numbers: true,
      uppercase: false,
    });
    await sendEmailForgot(
      "math1234@mailinator.com",
      toFetch,
      toFetch === "username" ? fetchedData : tempPwd
    );
    if (toFetch === "username") {
      res.json({ status: 200, fetched: true });
    } else {
      const data = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../data/tempPwd.json"))
      );
      data.temp = tempPwd;
      fs.writeFileSync(
        path.join(__dirname, "../data/tempPwd.json"),
        JSON.stringify(data, null, 4)
      );

      res.json({ status: 100, fetched: true }); // 100 means continue (move on to check tempPWD)
    }
  }
});

router.post("/temporary-password", (req, res) => {
  const filepath = path.join(__dirname, "../data/tempPwd.json");
  const isAuth = JSON.parse(fs.readFileSync(filepath)).temp === req.body.code;
  if (!isAuth) {
    res.json({ status: 404, access: false });
  } else {
    const data = JSON.parse(fs.readFileSync(filepath));
    data.temp = "";
    fs.writeFileSync(filepath, JSON.stringify(data, null, 4));
    //make and send token
    const token = jwt.sign(
      {
        email: req.body.email,
        birthday: req.body.birthday,
      },
      process.env.ACCESS_CLIENT_SECRET
    );
    res.json({ status: 100, access: token }); // go/continue to create new password page
  }
});

router.post("/update-password", async (req, res) => {
  const user = req.body.user;
  const pwd = await bcrypt.hash(req.body.password, 10);
  const isAdded = await resetUserPwd(user.email, user.birthday, pwd);
  if (isAdded.added) {
    res.json({ status: 200, message: isAdded.message });
  } else {
    res.json({ status: 404, message: isAdded.message, error: isAdded.error });
  }
});

router.post("/team", async (req, res) => {
  const user = req.body.user;
  const team = req.body.team;
  const teamName = req.body.name;
  const problem = req.body.isIssue;
  if (problem) {
    res.json({ status: 404, message: "Wrong input by user.", success: false });
  } else {
    const isAdded = await saveNewTeam(team, user);
    isAdded
      ? res.json({ status: 200, success: true })
      : res.json({
          status: 404,
          message: "Error in the database.",
          success: false,
        });
  }
});

router.post("/teams", async (req, res) => {
  const email = req.body.email;
  const allTeams = await getUserTeams(email);
  allTeams
    ? allTeams.length !== 0
      ? res.json({ status: 200, teams: allTeams, success: true })
      : res.json({
          status: 204,
          message: "There are no teams!",
          success: false,
        })
    : res.json({
        status: 404,
        message:
          "Error with the database or your connection to the website.\nPlease login again!",
        success: false,
      });
});

router.post("/remove-team", async (req, res) => {
  const email = JSON.parse(req.body.user).email;
  const teamId = req.body.teamId;
  const isDeleted = await deleteUserTeam(email, teamId);
  isDeleted
    ? res.json({ status: 200, success: true })
    : res.json({
        status: 404,
        message:
          "There is a problem. Please try again.\nIf error persits, try to login again.",
      });
});

module.exports = router;
