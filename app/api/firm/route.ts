import { NextResponse } from 'next/server';
import Firm from '@/models/firm';

export async function POST(req: Request) {
	const { name, description, logo } = await req.json(); // Qo'shimcha: description va logo

	try {
		const newFirm = new Firm({ name, description, logo }); // Firm yaratishda description va logo kiritilgan
		await newFirm.save(); // Ma'lumotni saqlash
		return NextResponse.json(
			{ message: 'Firm added successfully' },
			{ status: 201 }
		);
	} catch (err) {
		console.error('Error adding firm:', err); // Xato haqida batafsil ma'lumot
		return NextResponse.json(
			{ message: 'Error adding firm' },
			{ status: 500 }
		);
	}
}
