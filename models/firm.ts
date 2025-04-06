import { Schema, model, models } from 'mongoose';

// Firm interfeysi
interface FirmType {
	_id?: string;
	name: string;
}

const firmSchema = new Schema<FirmType>({
	name: { type: String, required: true },
});

// MongoDB modelini yaratish
const Firm = models.Firm || model<FirmType>('Firm', firmSchema);

export default Firm;
export type { FirmType };
