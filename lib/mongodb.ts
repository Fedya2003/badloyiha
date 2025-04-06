import mongoose from 'mongoose';

// MongoDB'ga ulanish uchun yordamchi funksiya
const connectDB = async (): Promise<void> => {
	if (mongoose.connections[0].readyState) {
		// Agar ulangan bo'lsa, qayta ulanishga hojat yo'q
		return;
	}

	try {
		await mongoose.connect(process.env.MONGODB_URI as string);
		console.log('MongoDB connected');
	} catch (error) {
		console.error('MongoDB connection error:', error);
		process.exit(1);
	}
};

export default connectDB;
