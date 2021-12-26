import Express from "express";
import { getPost, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js"
const router = Express.Router()

router.get('/', getPost)
router.post('/', createPost)
router.patch('/:id', updatePost)
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost)

export default router