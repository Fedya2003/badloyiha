import mongoose from 'mongoose';

const connectToDatabase = async () => {
	if (mongoose.connections[0].readyState) {
		console.log('Already connected to the database');
		return;
	}
	await mongoose.connect(process.env.MONGODB_URI!); // MONGODB_URI o'zgaruvchisini .env faylida belgilanganligini tekshiring
	console.log('Connected to the database');
};

export default connectToDatabase;
