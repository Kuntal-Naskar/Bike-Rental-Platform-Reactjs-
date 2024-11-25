
import express from 'express';
import {User,UserB} from '../schema/user-schema.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); 
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); 
    }
});
const upload = multer({ storage: storage });

router.post('/addFormB', async (req, res) => {
    const { name, mobile, review, rating } = req.body;
    
    try {
        const feedback = new UserB({
            name,
            mobile,
            review,
            rating
        });
        
        await feedback.save();
        res.status(201).json('Feedback Successfully Submitted');
    } catch (error) {
        res.status(500).json({ message: 'Error submitting feedback', error: error.message });
    }
});

router.post('/addFormA', upload.fields([
    { name: 'aadharImage', maxCount: 1 }, 
    { name: 'licenseImage', maxCount: 1 }
]), async (req, res) => {
    const { 
        name, 
        mobile, 
        email, 
        pickupDate, 
        dropDate, 
        brand, 
        basePrice, 
        price, 
        aadharNumber, 
        licenseNumber, 
        couponCode 
    } = req.body;

    try {
        const user = new User({
            name,
            mobile,
            email,
            pickupDate,
            dropDate,
            brand,
            basePrice,
            price,
            aadharNumber,
            licenseNumber,
            couponCode,
            aadharImage: req.files['aadharImage'] ? req.files['aadharImage'][0].originalname : null,
            licenseImage: req.files['licenseImage'] ? req.files['licenseImage'][0].originalname : null
        });

        await user.save();
        res.status(201).json({ message: 'User registration successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
});

export default router;
