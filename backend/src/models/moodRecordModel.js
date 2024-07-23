import { Schema, model } from "mongoose";

const moodEnum = ['happy', 'sad', 'angry', 'excited', 'anxious'];

// Define o esquema para o modelo de registros de humor
const MoodRecordSchema = new Schema(
  {
    date: {
      type: Date,
      required: [true, "Please enter the date of the entry"],
      default: Date.now, // Define a data atual como padrão
    },
    mood: {
      type: String,
      required: [true, "Please select a mood"],
      enum: moodEnum,
    },
    stress_level: {
      type: Number,
      min: [0, "Stress level must be between 0 and 10"],
      max: [10, "Stress level must be between 0 and 10"],
    },
    anxiety_level: {
      type: Number,
      min: [0, "Anxiety level must be between 0 and 10"],
      max: [10, "Anxiety level must be between 0 and 10"],
    },
    note: {
      type: String,
      trim: true, // Remove espaços em branco no início e no fim
    },
  },
  {
    timestamps: true, // Adiciona campos de data de criação e atualização automaticamente
  }
);

const MoodRecord = model("MoodRecord", MoodRecordSchema);

export default MoodRecord;
