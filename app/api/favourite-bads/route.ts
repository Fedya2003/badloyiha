import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import BadType from '@/models/bad';

export async function GET() {
	await connectToDatabase();

	try {
		const favourites = await BadType.find({ favourite: true });
		return NextResponse.json(favourites);
	} catch (error) {
		console.error('MongoDB error:', error);
		return NextResponse.json([], { status: 500 });
	}
}
