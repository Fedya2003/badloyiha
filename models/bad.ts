import mongoose, { Document, Schema } from 'mongoose';

// TypeScript interfeysi uchun BadType yaratamiz
export interface BadType extends Document {
	name: string;
	description: string;
	image: string;
	firm: string;
	category: string;
}

// Schema yaratish
const badSchema: Schema<BadType> = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		image: { type: String, required: true },
		firm: { type: String, required: true },
		category: { type: String, required: true },
	},
	{ timestamps: true } // Yaratish va yangilanish vaqtlarini qo'shish
);

// Modelni yaratish
const Bad = mongoose.models.Bad || mongoose.model<BadType>('Bad', badSchema);

export default Bad;
