const getAllPosts = (req,res)=>{
    res.status(200).json({
        message:"Posts fetched successfully",
        data:[
            {
                id:1,
                title:"First modular posts"
            }
        ]
    })
}
module.exports = { getAllPosts };







const getPostById = async(req,res)=>{
    const postId = req.params.postId;
    res.status(200).json({
        message: "Fetching data with ID:"+postId
    })
}
module.exports = {getPostById,getAllPosts};