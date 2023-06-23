import {Router} from 'express';
import auth from '../middlewares/auth.js';
import * as postController from '../controllers/post.controller.js'

const router = Router();


// * get post global
router.route('/').get(auth, postController.globalPosts);


// * get private post 
router.route('/mypost').get(auth, postController.privatePosts);


// * post for the landing
router.route('/public').get(postController.publicPosts)

// * get post by id
router.route('/this/:id').get(auth, postController.getPostById);


// * get recomendations
router.route('/categoryshow/:id').get(auth, postController.getPostByCategory);


// * upload to cloudinary
router.route('/').post(auth, postController.CreateAndUpload);


// * update posts
router.route('/:id').put(auth, postController.updatePost)

// * delete post 
router.route('/:id').delete(auth, postController.deletePosts); 

export default router;