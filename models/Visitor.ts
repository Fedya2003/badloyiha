import mongoose, { Schema, models } from 'mongoose';

const VisitorSchema = new Schema({
	ipAddress: String, // Foydalanuvchi IP manzili
	timestamp: { type: Date, default: Date.now }, // Tashrif vaqti
});

const Visitor = models.Visitor || mongoose.model('Visitor', VisitorSchema);

export default Visitor;
