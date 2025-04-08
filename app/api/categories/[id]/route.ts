// pages/api/categories/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import connectDB from '@/lib/mongodb'; // MongoDB ulanishi
import Category from '@/models/Category'; // Category modeli

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.query;

	await connectDB();

	try {
		const category = await Category.findById(id).populate('bads'); // BADlarni populate qilish
		if (!category) {
			return res.status(404).json({ message: 'Kategoriya topilmadi' });
		}
		res.status(200).json({ category, bads: category.bads });
	} catch (error) {
		res.status(500).json({ message: 'Xatolik yuz berdi', error });
	}
}
