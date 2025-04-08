import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Bad from '@/models/bad';

export async function POST(req: NextRequest) {
	try {
		await connectToDatabase();

		const { name, description, image, firm, category } = await req.json(); // req.json() ishlatish

		const newBad = new Bad({
			name,
			description,
			image,
			firm,
			category,
		});

		await newBad.save();

		return NextResponse.json(
			{ message: "BAD muvaffaqiyatli qo'shildi" },
			{ status: 201 }
		);
	} catch (error) {
		console.error('Error adding BAD:', error);
		return NextResponse.json(
			{ message: "Nimadir noto'g'ri ketdi" },
			{ status: 500 }
		);
	}
}

export async function GET() {
	try {
		await connectToDatabase();
		const bads = await Bad.find(); // MongoDB dan BADlarni olish

		return NextResponse.json(bads, { status: 200 });
	} catch (error) {
		console.error('Error fetching BADs:', error);
		return NextResponse.json(
			{ message: "Nimadir noto'g'ri ketdi" },
			{ status: 500 }
		);
	}
}
