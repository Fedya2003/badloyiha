// lib/mongodb.ts

import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
	throw new Error('MONGODB_URI muhit o‘zgaruvchisi topilmadi');
}

let isConnected = false;

export default async function connectToDatabase() {
	if (isConnected) return;

	try {
		await mongoose.connect(MONGODB_URI, {
			// dbName: 'your-db-name', // istasangiz qo‘shing
		});
		isConnected = true;
		console.log('MongoDB ulandi');
	} catch (error) {
		console.error('MongoDBga ulanishda xatolik:', error);
		throw error;
	}
}
