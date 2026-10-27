
const express = require("express");

const app = express();
const PORT = 4000;

// GET API
app.get("/", (req, res) => {
    res.send("Hello, this is hosted in github");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
