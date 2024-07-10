import mongoose from 'mongoose';

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!);
  } catch (error) {
    throw new Error('Connection Failed!');
  }
};

export default dbConnect;
