import Record from '../../models/catag.model.js';
import { errorHandler } from '../../utils/erroe.handler.js';

const delrecord = async (req, res, next)=>{
    const { name, catagory} = req.body
    try {
        const deletedSubject = await Record.findOneAndDelete({ name: name, catagory: catagory});

        if(!deletedSubject){
            next(errorHandler(404, "Record not Found"));
            return;
        }

        res.status(201).json({message:'Record deleted successfully'});
    } catch (error) {
        next(error);
    }
}

export {delrecord};