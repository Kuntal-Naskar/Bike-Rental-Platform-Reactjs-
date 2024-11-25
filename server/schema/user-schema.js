import mongoose from "mongoose";


const userSchemaB = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    review: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 }
});
const UserB = mongoose.model('Feedback', userSchemaB);

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    mobile: { type: String, required: true },
    email: { type: String, required: true, match: [/.+@gmail\.com$/, 'Please enter a valid Gmail address.'] },
    pickupDate: { type: Date, required: true },
    dropDate: { type: Date, required: true },
    brand: { type: String, required: true },
    basePrice: { type: Number, required: true },
    price: { type: Number, required: true },
    aadharNumber: { type: String, required: true, match: [/^\d{4} \d{4} \d{4}$/, 'Aadhar number should be in the format XXXX XXXX XXXX.'] },
    licenseNumber: { type: String, required: true, match: [/^[A-Za-z0-9]{4} [A-Za-z0-9]{4} [A-Za-z0-9]{7}$/, 'License number should be in the format XXXX XXXX XXXXXXX.'] },
    couponCode: { type: String, default: '' },
    aadharImage: { type: String, required: true },
    licenseImage: { type: String, required: true }
});
const User = mongoose.model('Information', userSchema);

// Export both models
export { User, UserB };

