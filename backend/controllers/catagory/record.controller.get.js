import Record from '../../models/catag.model.js';

const getrecord = async(req, res, next)=>{
    try {
        const records = await Record.find({});
        res.json(records);
    } catch (error) {
        next(error);
    }
}

export {getrecord};