// Filename: Pet.ts
import { Schema, model } from 'mongoose';

interface IPet {
  id: number;
  title: string;
  variety: string;
  gender: string;
  age: string;
  info: string;
  location: string;
  imageurl: string;
}

const petSchema = new Schema<IPet>({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  variety: { type: String, required: true },
  gender: { type: String, required: true },
  age: { type: String, required: true },
  info: { type: String, required: true },
  location: { type: String, required: true },
  imageurl: { type: String, required: true },
});

const Pet = model<IPet>('Pet', petSchema);

export default Pet;
