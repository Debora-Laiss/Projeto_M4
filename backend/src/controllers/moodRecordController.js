import mongoose from 'mongoose';
import Entry from "../models/moodRecordModel.js";

class MoodRecordControllers {
	async getEntries() {
		//console.log("getEntries")
		try {
			const entries = await Entry.find({});			
			console.log("Aqui estao seus dados", entries);
			return { body: entries, success: true, statusCode: 200 };
		} catch (error) {
			return { body: error.message, success: false, statusCode: 500 };
		}
	}

	async getEntry(id) {
		if (!mongoose.Types.ObjectId.isValid(id)) {
		  return { body: "Invalid ID format", success: false, statusCode: 400 };
		}
	
		try {
		  const entry = await Entry.findById(id);
		  if (!entry) {
			return { body: "Entry not found", success: false, statusCode: 404 };
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
					$lt: endDate, // Fim do mês
				},
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
				return { body: "Entry not found", success: false, statusCode: 404 };
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
				return { body: "Entry not found", success: false, statusCode: 404 };
			}
			return {
				body: "Entry deleted successfully",
				success: true,
				statusCode: 200,
			};
		} catch (error) {
			return { body: error.message, success: false, statusCode: 500 };
		}
	}
}

export default MoodRecordControllers;