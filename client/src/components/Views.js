// server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Simulated database (in memory)
let viewCount = 0;

app.get('/Admin', (req, res) => {
    viewCount++;
    res.json({ views: viewCount });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
