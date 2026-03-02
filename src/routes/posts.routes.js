const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Posts fetched successfully",
        data: [
            {
                id: 1,
                title: "post"
            }
        ]
    });
});

module.exports = router;