const fs = require("fs");
const path = require("path");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/music", (req, res) => {
  const filePath = path.join(__dirname, "/files/td.mp3");

  fs.stat(filePath, (error, stats) => {
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Length", stats.size);

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(res);
  });
});

app.get("/music1", (req, res) => {
  const filePath = path.join(__dirname, "/files/corra!.mp3");

  fs.stat(filePath, (error, stats) => {
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Length", stats.size);

    const readStream = fs.createReadStream(filePath);

    readStream.pipe(res);
  });
});

app.listen(3000);
