import { model, Schema, } from "mongoose";

const schema = new Schema({   //creating schema for storing variables
    name: {
        type: String,
        required: true, //confirm fill 
        unique:true //like only post new user
    },
    phno: 
    {
        type:String,
        required:true,
        unique:true
    }
})
const user = model("user", schema)

export default user 