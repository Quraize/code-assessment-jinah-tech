import express from 'express';
import { getrecord } from '../../controllers/catagory/record.controller.get.js';

const getRecordRouter = express.Router();

getRecordRouter.get('/getrecord', getrecord);

export {getRecordRouter};