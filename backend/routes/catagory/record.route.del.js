import express from 'express';
import { delrecord } from '../../controllers/catagory/record.controller.delete.js';

const delRecordRouter = express.Router();

delRecordRouter.delete('/delrecord', delrecord);

export {delRecordRouter};