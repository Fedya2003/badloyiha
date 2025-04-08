import { NextResponse } from 'next/server';
import Firm from '@/models/firm';

export async function GET() {
	try {
		const firms = await Firm.find(); // MongoDB'dan firmalarni olish

		// Agar firmalar bo'lsa, ularni qaytarish
		if (firms.length > 0) {
			return NextResponse.json(firms, { status: 200 });
		}

		// Agar firmalar bo'lmasa, bu haqda xabar berish
		return NextResponse.json(
			{ message: 'Hech qanday firma topilmadi.' },
			{ status: 404 }
		);
	} catch (err) {
		console.error('Firmalarni olishda xato:', err);
		return NextResponse.json(
			{ error: 'Firmalar olishda xatolik yuz berdi' },
			{ status: 500 }
		);
	}
}

export async function POST(req: Request) {
	const { name, description, logo } = await req.json();

	// Ma'lumotlar to'liq bo'lishini tekshirish
	if (!name || !description || !logo) {
		return NextResponse.json(
			{
				error: "Iltimos, barcha maydonlarni to'ldiring: name, description, logo.",
			},
			{ status: 400 }
		);
	}

	try {
		const newFirm = new Firm({ name, description, logo });
		await newFirm.save(); // Firmani saqlash

		return NextResponse.json(
			{ message: "Firma muvaffaqiyatli qo'shildi." },
			{ status: 201 }
		);
	} catch (err) {
		console.error('Error adding firm:', err);
		return NextResponse.json(
			{ error: "Firma qo'shishda xatolik yuz berdi" },
			{ status: 500 }
		);
	}
}
