import { NextResponse } from 'next/server';
import Category from '@/models/category';

export async function POST(req: Request) {
	const { name } = await req.json();

	try {
		const newCategory = new Category({ name });
		await newCategory.save();
		return NextResponse.json(
			{ message: 'Category added successfully' },
			{ status: 201 }
		);
	} catch (error: unknown) {
		// Handling the error or logging it for debugging
		if (error instanceof Error) {
			console.error('Error adding category:', error.message);
		}
		return NextResponse.json(
			{ message: 'Error adding category' },
			{ status: 500 }
		);
	}
}
