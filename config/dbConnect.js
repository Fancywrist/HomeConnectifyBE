import mongoose from 'mongoose';

const dbConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Connected successfully');
    }catch(error){
        console.log('Connection failed', error.message);
    }
};

export default dbConnect;