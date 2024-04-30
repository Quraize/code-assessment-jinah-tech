import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true,  
    },
    catagory:{
        type: String,
        required: true,
    },
}, {timestamps: true});

const Record = mongoose.model('Record', recordSchema);

export default Record;