import { v2 as cloudinary } from 'cloudinary';
import Post from '../models/Post.js';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});


const publicPosts = async (req, res) => {
    try {
        const posts = await Post.paginate({}, {limit:14})

        res.status(200).json({ data:posts})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'somthing goes wrong on the server (getPublic post)'})
    }
}

const globalPosts =  async (req, res) => {
    try {
        const posts = await Post.find({isGlobal:true}).populate('owner', {
            avatar:1,
            _id:0
        });
        // const posts = await req.user.populate('posts');

        res.status(200).json({ success: true, data: posts });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
}


const privatePosts = async (req, res) => {
    try {
        const posts = await Post.find({owner:req.user._id}).populate('owner', {
            avatar:1,
            _id:0
        });
        // console.log(posts);
        if (!posts) {
            return res.status(500).json({success:false, message:'no se ha encontrado el user'})
        }
        res.status(200).json({ success: true, data: posts });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching posts failed, please try again', error:err });
    }
}


const getPostById = async (req, res) => {
    try {
        const posts = await Post.findById(req.params.id).populate('owner', {
            avatar:1,
            _id:1
        });
        res.status(200).json({ success: true, data: posts });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
}


const getPostByCategory =  async (req, res) => {
    const category = req.params.id
    category[0].toUpperCase();
    try {
        const posts = await Post.find({category}).populate('owner', {
            avatar:1,
            _id:0
        });

        if (!posts || posts == [] ) {
            return res.status(400).json({message:'post not found'})
        }
        res.status(200).json({ success: true, data: posts });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
    }
}

const CreateAndUpload = async (req, res) => {
    try {
        const { photoName, prompt, photo, isGlobal, isWithAI, category} = req.body;

        console.log(req.body);
        // console.log(req.user);

        if (!photo || !photoName || !prompt || !category) {
            return  res.status(400).json({message:'plese send a name, photo and prompt'})
        }
        const photoUrl = await cloudinary.uploader.upload(photo);
        
        const newPost = await Post.create({
        name:req.user.user,
        prompt,
        photo: photoUrl.url,
        photoName,
        category,
        public_id:photoUrl.public_id,
        isGlobal,
        isWithAI,
        owner:req.user._id
        });

        res.status(200).json({ success: true, data: newPost });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Unable to create a post, please try again' });
    }
}


const deletePosts = async(req, res)=> {
    try {
        await Post.findOneAndDelete({_id:req.params.id, owner:req.user._id});
        const deletephoto =  cloudinary.image()
        res.status(200).json({message:'task deleted successfully'})
        
    } catch (error) {
        res.status(500).json({
            message:'Somthing goes wrong on the server (deleteTAsk)',
            error
        })
    }
}

const updatePost = async(req, res) =>{
    const reqFields = Object.keys(req.body);
    const allowedFields = ['isGlobal', 'isWithAI', 'name', 'photoName', 'prompt', 'category'];

    const result = reqFields.every(key => allowedFields.includes(key));

    if (!result || reqFields.length > allowedFields.length || req.body == {}) {
        return res.status(400).json({message:'invalid update'})
    }

    try {
        const updatedTask = await Post.findOneAndUpdate({_id:req.params.id, owner:req.user._id}, req.body);

        if (!updatedTask) {
            return  res.status(404).json({message:'task not found'});
        }

        res.json({
            success:true,
            updateted:updatedTask
        });

    } catch (error) {
        res.status(500).json({
            message:'Somthing goes wrong on the server (updateTask)',
            error
        })
    }
}

export {
    CreateAndUpload,
    deletePosts,
    getPostByCategory,
    getPostById,
    globalPosts,
    privatePosts,
    publicPosts,
    updatePost,

}