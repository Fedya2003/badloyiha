import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Bad from '@/models/bad';
import Visitor from '@/models/Visitor';

export async function GET() {
	try {
		await connectToDatabase();

		const totalBads = await Bad.countDocuments();
		const visitorsCount = await Visitor.countDocuments();

		return NextResponse.json({
			totalBads,
			visitorsCount,
		});
	} catch (error) {
		console.error('Statistika olishda xatolik:', error);
		return NextResponse.json(
			{ error: 'Xatolik yuz berdi' },
			{ status: 500 }
		);
	}
}
