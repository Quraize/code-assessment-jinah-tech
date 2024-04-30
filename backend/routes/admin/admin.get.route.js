import express from 'express';
import authAdmin from '../../controllers/admin/admin.auth.controller.js';

const authAdminRoute = express.Router();

authAdminRoute.post('/authadmin', authAdmin);

export default authAdminRoute;