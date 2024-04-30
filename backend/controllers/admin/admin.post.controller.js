import Admin from '../../models/admin.model.js';
import bcryptjs from 'bcryptjs';

const addAdmin = async(req, res, next) => {
    const {name, email, password} = req.body;
    {/*also provide logic to find if the admin already exists */}
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newAdmin = new Admin({name, email, password: hashedPassword});
    try {
        await newAdmin.save();
        res.status(201).json({message:'admin created successfully'})
    } catch (error) {
        next(error);
    }
};

export default addAdmin;