import {mongoose} from 'mongoose'
import {DB_URL, NODE_ENV} from '../config/env.js'

//check if there is a database url in the environment variables
if(!DB_URL){
    throw new Error('Database URL is not defined in the environment variables')
}
const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;