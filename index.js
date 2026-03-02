const express = require("express");
const app = express();

app.use(express.json());

// Correct import
const postsRouter = require('./src/routes/posts.routes');

// Correct usage
app.use('/api/v1/posts', postsRouter);

app.get('/', (req, res) => {
    res.send("Server running");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});