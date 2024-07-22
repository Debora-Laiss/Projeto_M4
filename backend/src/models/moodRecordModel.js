import { Schema, model } from "mongoose";

const moodEnum = ['happy', 'sad', 'angry', 'excited', 'anxious'];


// Define o esquema para o modelo de registros de humor
const MoodRecordSchema = Schema(
  {
    date: {
      type: Date,
      required: [true, "Please enter the date of the entry"],
    },

    mood: {
      type: String,
      required: true,
      enum: moodEnum,
    },

    stress_level: {
      type: Number,
      min: 0,
      max: 10,
      required: false,
    },

    anxiety_level: {
      type: Number,
      min: 0,
      max: 10,
      required: false,
    },

    note: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true, // Adiciona campos de data de criação e atualização automaticamente
  }
);


const MoodRecord = model("MoodRecord", MoodRecordSchema)

export default MoodRecord
