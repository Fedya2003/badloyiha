// app/api/bads/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Bad from '@/models/bad';
import { BadType } from '@/models/bad';

export async function POST(req: Request) {
	await connectDB(); // MongoDB'ga ulanish

	try {
		const body: BadType = await req.json();

		const newBad = new Bad(body);
		await newBad.save(); // Ma'lumotni saqlash

		return NextResponse.json(
			{ message: "BAD muvaffaqiyatli qo'shildi!" },
			{ status: 201 }
		);
	} catch {
		return NextResponse.json(
			{ message: 'Xatolik yuz berdi!' },
			{ status: 500 }
		);
	}
}
