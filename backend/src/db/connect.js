import mongoose from 'mongoose';


const connectDB = async () => {
    mongoose.set('strictQuery', true);

   const db = await mongoose.connect('mongodb://127.0.0.1/imgApp');

   if (db) {
    console.log('connected to database');
   }
}

connectDB();