import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Visitor from '@/models/Visitor';

export async function GET() {
	try {
		await connectToDatabase();

		// Foydalanuvchi IP manzilini olish (yoki boshqa usul)
		const ipAddress = '127.0.0.1'; // Test uchun, realda `req.headers['x-forwarded-for']` orqali olinadi

		// Yangi tashrifni bazaga saqlash
		await Visitor.create({ ipAddress });

		// Tashriflar sonini olish
		const visitorsCount = await Visitor.countDocuments();

		return NextResponse.json({ visitorsCount });
	} catch (error) {
		console.error('Tashrifni saqlashda xatolik:', error);
		return NextResponse.json(
			{ error: 'Xatolik yuz berdi' },
			{ status: 500 }
		);
	}
}
