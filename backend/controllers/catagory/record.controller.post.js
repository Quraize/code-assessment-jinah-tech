import Record from '../../models/catag.model.js';
import { errorHandler } from '../../utils/erroe.handler.js';

const recordadd = async (req, res, next) => {
    const {name, catagory } = req.body
    try {
        if(!name || !catagory){
            next(errorHandler(401, "Please Provide the necessary credentials."));
            return;
        }
        const newSubject = new Record({name, catagory});
        const existingSubject = await Record.findOne({name});
  
        if(existingSubject){
            next(errorHandler(409, "Record with this name Already exist."))
            return;
        }
        const saveSubject = await newSubject.save();
        res.status(201).json({message:'Record inserted successfully', newSubject});
    } catch (error) {
       next(error);
    }
};

export default recordadd;