import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const connnect=async () => {
    try {
        await mongoose.connect(process.env.mongo_uri)
        console.log("connected..⚙️")
    }
    catch (error) {
        console.error(error.message);
        process.exit(1)
    }

} 
export default connnect