import express from 'express';
import {config} from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';
import auth from '../middlewares/auth.js';

config();

const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);


router.route('/').post(auth, async (req, res) => {
    try {
        const { prompt } = req.body;
        // const prompt = 'a beautiful beach' 
        //console.log(prompt)

        if (!prompt) {
            return res.status(400).json({message:'Write a prompt'})
        }

        const aiResponse = await openai.createImage({
        prompt,
        n: 1,
        size: '1024x1024',
        response_format: 'b64_json',
        });

        const image = aiResponse.data.data[0].b64_json;
        res.status(200).json({ photo: image });
    } catch (error) {
        console.error(error);
        res.status(500).send(error?.response.data.error.message || 'Something went wrong');
    }
});

export default router;