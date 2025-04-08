import { Schema, model, models } from 'mongoose';

interface FirmType {
	name: string;
	description: string;
	logo: string;
}

const firmSchema = new Schema<FirmType>({
	name: { type: String, required: true },
	description: { type: String, required: true },
	logo: { type: String, required: true },
});

const Firm = models.Firm || model<FirmType>('Firm', firmSchema);

export default Firm;
export type { FirmType };
