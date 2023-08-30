const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/api/search/player", async (req, res) => {
  try {
    const query = req.query.q;
    const apiUrl = `https://www.nba.com/stats/api/search/player/?q=${query}`;
    const response = await axios.get(apiUrl);
    res.json(response.data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
