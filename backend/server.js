import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
//auth admin funcs
import addAdminRoute from './routes/admin/admin.post.route.js';
import authAdminRoute from './routes/admin/admin.get.route.js';
//catagory funcs
import { addRecordPostRouter } from './routes/catagory/record.route.post.js';
import { getRecordRouter } from './routes/catagory/record.route.get.js';
import { delRecordRouter } from './routes/catagory/record.route.del.js';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();

//auth admin 
app.use('/admin', addAdminRoute);
app.use('/admin', authAdminRoute);

//catagory funcs
app.use('/catagory', addRecordPostRouter);
app.use('/catagory', getRecordRouter);
app.use('/catagory', delRecordRouter);

//middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

app.listen(3000, () =>{
    console.log('Server is Listening on port 3000')
})