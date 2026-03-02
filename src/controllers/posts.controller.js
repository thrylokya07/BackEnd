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