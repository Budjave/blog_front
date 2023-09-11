const express =require("express");
const {
    getAllBlogsController,
    createBlogController,
    updateBlogbyIdController,
    getBlogIdController,
    deleteBlogController,
    userBlogController
} = require("../controllers/blogController");


const router = express.Router();

router.get('/all-blogs',getAllBlogsController)
router.post('/Create-Blog', createBlogController)
router.post('/update-blog/:id', updateBlogbyIdController)
router.post('/Get-Blog/:id', getBlogIdController)
router.post('/Delete-Blog/:id', deleteBlogController)
router.post('/User-Blog/:id', userBlogController)
module.exports = router;