import mongoose, { Schema, Document } from 'mongoose';
import { BadType } from '@/models/bad'; // BadType import qilish

// Category interfeýsini yangilash
interface ICategory extends Document {
	name: string;
	bads: BadType[]; // `bads` maydoni BadType arrayi sifatida ko'rsatiladi
}

const CategorySchema: Schema = new Schema<ICategory>({
	name: {
		type: String,
		required: true,
	},
	bads: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bad' }], // Badlar bilan bog'lanish
});

// Category modelini yaratish
const Category =
	mongoose.models.Category ||
	mongoose.model<ICategory>('Category', CategorySchema);

export default Category;
