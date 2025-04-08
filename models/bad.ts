import { Schema, model, models } from 'mongoose';

// BadType interfeysi
interface BadType {
	_id?: string;
	name: string;
	description: string;
	image: string;
	firm: string;
	category: string; // Categoryni id orqali bog'lash
}

const badSchema = new Schema<BadType>({
	name: { type: String, required: true },
	description: { type: String, required: true },
	image: { type: String, required: true },
	firm: { type: String, required: true },
	category: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Category',
		required: true,
	}, // Categoryni ObjectId orqali bog'lash
});

// MongoDB modelini yaratish
const Bad = models.Bad || model<BadType>('Bad', badSchema);

export default Bad;
export type { BadType };
