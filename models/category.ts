import { Schema, model, models } from 'mongoose';

// Category interfeysi
interface CategoryType {
	_id: string;
	name: string;
}

const categorySchema = new Schema<CategoryType>({
	name: { type: String, required: true },
});

// MongoDB modelini yaratish
const Category =
	models.Category || model<CategoryType>('Category', categorySchema);

export default Category;
export type { CategoryType };
