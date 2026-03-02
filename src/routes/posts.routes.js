const express = require("express");
const router = express.Router();
const {getAllPosts} =require('../controllers/posts.controller.js');
router.get('/',getAllPosts);


router.get('/', (req, res) => {
    res.status(200).json({
        message: "Posts fetched successfully",
        data: [
            {
                id: 1,
                title: "First modular post"
            }
        ]
    });
});



router.get('/:postId',postConroller.getPostById);

module.exports = router;