import mongoose from 'mongoose';

const baseconn = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.database_url);

    if (connection.readyState === 1) {
      Promise.resolve(true);
      console.log('database successfully connected');
    }
  } catch (error) {
    Promise.reject(false);
  }
};

export default baseconn;
