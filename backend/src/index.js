import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import postRoutes from './routes/post.routes.js';
import dalleRoutes from './routes/dalle.routes.js';
import UserRoutes from './routes/user.routes.js';
import CategoryRoutes from './routes/category.routes.js';
import ConmentRoutes from './routes/conment.routes.js';
import paymentRoutes from './routes/payment.routes.js'
import './db/connect.js'

// * settings
const app = express();
const port = process.env.PORT || 7000
config();

// * middlewares
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json({ limit: '50mb' }));


// * routes
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/user', UserRoutes);
app.use('/api/v1/category', CategoryRoutes);
app.use('/api/v1/conment', ConmentRoutes);
app.use('/api/v1/payment', paymentRoutes);


// * @luissototheedge
// * default

app.use((req, res, next) => {
    res.send('Resourse not found');

    next();
})

app.listen(port, () => console.log(`listening on port ${port}!`))