import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectToDatabase from '@/lib/mongodb'; // MongoDB ulanish funksiyasi
import Bad from '@/models/bad'; // BAD model

// Parametrlar va tur
interface RouteParams {
	categoryId: string;
}

export async function GET(req: NextRequest, context: { params: RouteParams }) {
	try {
		// MongoDBga ulanish
		await connectToDatabase();

		const { categoryId } = context.params;

		// Agar categoryId ObjectId tipida bo'lsa:
		const objectId = new mongoose.Types.ObjectId(categoryId);

		// BADlarni topish
		const bads = await Bad.find({ categoryId: objectId });

		return NextResponse.json(bads);
	} catch (error) {
		console.error('BADlarni olishda xatolik:', error);
		return NextResponse.json(
			{ error: 'BADlarni olishda xatolik yuz berdi' },
			{ status: 500 }
		);
	}
}
