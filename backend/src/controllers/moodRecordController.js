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
            // ! -> negação
		       // ! + entry = se entry não existe/vier
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
          const startDate = new Date(date);
          startDate.setDate(1); // Define o dia como o primeiro do mês
  
          const endDate = new Date(startDate);
          endDate.setMonth(startDate.getMonth() + 1); // Move para o próximo mês
          endDate.setDate(0); // Define o dia como o último do mês anterior, efetivamente obtendo o último dia do mês original
  
          const entries = await Entry.find({
              date: {
                  $gte: startDate, // Começo do mês
                  $lt: endDate // Fim do mês
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
