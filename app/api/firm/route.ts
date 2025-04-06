import { NextResponse } from 'next/server';
import Firm from '@/models/firm';

export async function POST(req: Request) {
	const { name } = await req.json();

	try {
		const newFirm = new Firm({ name });
		await newFirm.save();
		return NextResponse.json(
			{ message: 'Firm added successfully' },
			{ status: 201 }
		);
	} catch {
		// Remove the error variable here if not needed
		return NextResponse.json(
			{ message: 'Error adding firm' },
			{ status: 500 }
		);
	}
}
