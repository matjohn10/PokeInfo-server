const express = require("express");
const router = express.Router();
const dotenv = require("dotenv");
dotenv.config();
const API = "http://127.0.0.1:5000/api"; //change when deployed process.env.API_URL
console.log(API);
const axios = require("axios");
const path = require("path");
const sleep = require("../utils/sleep");

//Get the pokemons
router.get("/pokemons", async (req, res) => {
  await sleep(100);
  try {
    let result = await axios.get(API + "/pokemons");
    res.send(result.data);
  } catch (error) {
    if (error.response?.status === 404)
      res.sendFile(path.join(__dirname, "../views/404.html"));
  }
});

//Get specific pokemon
router.get("/pokemons/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await axios.get(API + "/pokemons/" + id);
    res.send(result.data);
  } catch (error) {
    if (error.response.status === 404)
      res.sendFile(path.join(__dirname, "../views/404.html"));
  }
});

//Get types (combat or list)
router.get("/types/:id", async (req, res) => {
  const id = req.params.id;
  try {
    if (id.toLowerCase() === "combat") {
      let result = await axios.get(API + "/types-combat");
      res.send(result.data);
    } else {
      let result = await axios.get(API + "/types/" + id);
      res.send(result.data);
    }
  } catch (error) {
    if (error.response.status === 404)
      res.sendFile(path.join(__dirname, "../views/404.html"));
  }
});

router.get("/types", async (req, res) => {
  try {
    let response = await axios.get(API + "/types");
    res.send(response.data);
  } catch (error) {
    if (error.response.status === 404) {
      res.sendFile(path.join(__dirname, "../views/404.html"));
    }
  }
});

router.get("/types/combat/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const result = await axios.get(API + "/types-combat/" + id);
    res.send(result.data);
  } catch (error) {
    if (error.response.status === 404)
      res.sendFile(path.join(__dirname, "../views/404.html"));
  }
});

//Get specific pokemon description
router.get("/description/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let result = await axios.get(API + "/description/" + id);
    res.send(result.data);
  } catch (error) {
    if (error.response.status === 404)
      res.sendFile(path.join(__dirname, "../views/404.html"));
  }
});

router.get("/image", async (req, res) => {
  try {
    const result = await axios.get(API + "/image-paths");
    res.send(result.data);
  } catch (error) {
    if (error.response.status === 404)
      res.sendFile(path.join(__dirname, "../views/404.html"));
  }
});

router.get("/image/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const result = await axios.get(API + "/image-paths/" + name);
    // format of path object {id: path}
    // path format: 'imgages/pokemon{id}.jpg'
    res.send(result.data);
  } catch (error) {
    if (error.response.status === 404)
      res.sendFile(path.join(__dirname, "../views/404.html"));
  }
});

module.exports = router;
