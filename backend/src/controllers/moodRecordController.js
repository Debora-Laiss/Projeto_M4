import Entry from '../models/moodRecordModel.js';
//const  Entry = require('../models/moodRecordModel.js')

class MoodRecordControllers {
    async getEntries() {
        try {
            const entries = await Entry.find({});
            return { body: entries, success: true, statusCode: 200 };
        } catch (error) {
            return { body: error.message, success: false, statusCode: 500 };
        }
    }

    async getEntry(id) {
        try {
            const entry = await Entry.findById(id);
            if (!entry) {
                return { body: 'Entry not found', success: false, statusCode: 404 };
            }
            return { body: entry, success: true, statusCode: 200 };
        } catch (error) {
            return { body: error.message, success: false, statusCode: 500 };
        }
    }

    async getEntriesByDate(date) {
        try {
            const entries = await Entry.find({
                date: {
                    $gte: new Date(date + "-01"), // Começo do mês
                    $lt: new Date(new Date(date + "-01").setMonth(new Date(date + "-01").getMonth() + 1)) // Fim do mês
                }
            });
            return { body: entries, success: true, statusCode: 200 };
        } catch (error) {
            return { body: error.message, success: false, statusCode: 500 };
        }
    }

    async createEntry(entryData) {
        try {
            const entry = await Entry.create(entryData);
            return { body: entry, success: true, statusCode: 201 };
        } catch (error) {
            return { body: error.message, success: false, statusCode: 500 };
        }
    }

    async updateEntry(id, entryData) {
        try {
            const entry = await Entry.findByIdAndUpdate(id, entryData, { new: true });
            if (!entry) {
                return { body: 'Entry not found', success: false, statusCode: 404 };
            }
            return { body: entry, success: true, statusCode: 200 };
        } catch (error) {
            return { body: error.message, success: false, statusCode: 500 };
        }
    }

    async deleteEntry(id) {
        try {
            const entry = await Entry.findByIdAndDelete(id);
            if (!entry) {
                return { body: 'Entry not found', success: false, statusCode: 404 };
            }
            return { body: 'Entry deleted successfully', success: true, statusCode: 200 };
        } catch (error) {
            return { body: error.message, success: false, statusCode: 500 };
        }
    }
}

export default MoodRecordControllers

/*const MoodRecord = require("../models/moodRecordModel.js")

// Função para obter todos os registros de humor
const getMoodRecords = async (req, res) => {
  try {
    const records = await MoodRecord.find({})
    res.status(200).json(records);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Função para obter um registro específico por ID
const getMoodRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const record = await MoodRecord.findById(id)
    if (!record) {
      return res.status(404).json({ message: "Record not found" })
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Função para criar um novo registro de humor
const createMoodRecord = async (req, res) => {
  try {
    const record = await MoodRecord.create(req.body)
    res.status(201).json(record); // Usar status 201 para criação bem-sucedida
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Função para atualizar um registro existente
const updateMoodRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const record = await MoodRecord.findByIdAndUpdate(id, req.body, { new: true }) // Retorna o documento atualizado
    if (!record) {
      return res.status(404).json({ message: "Record not found" })
    }
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Função para deletar um registro
const deleteMoodRecord = async (req, res) => {
  try {
    const { id } = req.params
    const record = await MoodRecord.findByIdAndDelete(id)
    if (!record) {
      return res.status(404).json({ message: "Record not found" })
    }
    res.status(200).json({ message: "Record deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getMoodRecords,
  getMoodRecord,
  createMoodRecord,
  updateMoodRecord,
  deleteMoodRecord,
}
*/