import express from 'express';
import recordadd from '../../controllers/catagory/record.controller.post.js';

const addRecordPostRouter = express.Router();

addRecordPostRouter.post('/addrecord', recordadd);

export {addRecordPostRouter};