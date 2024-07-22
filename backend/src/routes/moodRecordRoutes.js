import express from 'express';
import MoodRecordControllers from '../controllers/moodRecordController.js';
const moodRecordRouter = express.Router();

const moodRecordControllers = new MoodRecordControllers();

// Rota para obter todas as entradas de humor
moodRecordRouter.get('/', async (req, res) => {
    try {
        const { body, success, statusCode } = await moodRecordControllers.getEntries();
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

// Rota para obter uma entrada específica por ID
moodRecordRouter.get('/:id', async (req, res) => {
    try {
        const { body, success, statusCode } = await moodRecordControllers.getEntry(req.params.id);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

// Rota para obter entradas por data
moodRecordRouter.get('/date/:date', async (req, res) => {
    try {
        const { date } = req.params;
        const { body, success, statusCode } = await moodRecordControllers.getEntriesByDate(date);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

// Rota para criar uma nova entrada de humor
moodRecordRouter.post('/', async (req, res) => {
    try {
        const { body, success, statusCode } = await moodRecordControllers.createEntry(req.body);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

// Rota para atualizar uma entrada existente
moodRecordRouter.put('/:id', async (req, res) => {
    try {
        const { body, success, statusCode } = await moodRecordControllers.updateEntry(req.params.id, req.body);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

// Rota para deletar uma entrada
moodRecordRouter.delete('/:id', async (req, res) => {
    try {
        const { body, success, statusCode } = await moodRecordControllers.deleteEntry(req.params.id);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

export default moodRecordRouter 

/*import express from 'express'
import MoodRecord from '../models/moodRecordModel.js'
const router = express.Router()
import {
  getMoodRecords,
  getMoodRecord,
  createMoodRecord,
  updateMoodRecord,
  deleteMoodRecord,
} from '../controllers/moodRecordController.js'

// Rota para obter todos os registros de humor
router.get('/', getMoodRecords)

// Rota para obter um registro específico por ID
router.get('/:id', getMoodRecord)

// Nova rota para obter registros por data
router.get('/date/:date', async (req, res) => {
  try {
    const { date } = req.params;
    const records = await MoodRecord.find({
      date: {
        $gte: new Date(date + '-01'), // Começo do mês
        $lt: new Date(new Date(date + '-01').setMonth(new Date(date + '-01').getMonth() + 1)) // Fim do mês
      }
    });
    res.status(200).json(records)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// Rota para criar um novo registro de humor
router.post('/', createMoodRecord)

// Rota para atualizar um registro existente
router.put('/:id', updateMoodRecord)

// Rota para deletar um registro
router.delete('/:id', deleteMoodRecord)

moodRecordRouter.get('/', async (req, res) => {
    try {
        const { body, success, statusCode } = await moodRecordControllers.getEntries();
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

// Rota para obter uma entrada específica por ID
moodRecordRouter.get('/:id', async (req, res) => {
    try {
        const { body, success, statusCode } = await moodRecordControllers.getEntry(req.params.id);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

// Rota para obter entradas por data
moodRecordRouter.get('/date/:date', async (req, res) => {
    try {
        const { date } = req.params;
        const { body, success, statusCode } = await moodRecordControllers.getEntriesByDate(date);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

// Rota para criar uma nova entrada de humor
moodRecordRouter.post('/', async (req, res) => {
    try {
        const { body, success, statusCode } = await moodRecordControllers.createEntry(req.body);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

// Rota para atualizar uma entrada existente
moodRecordRouter.put('/:id', async (req, res) => {
    try {
        const { body, success, statusCode } = await moodRecordControllers.updateEntry(req.params.id, req.body);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});

// Rota para deletar uma entrada
moodRecordRouter.delete('/:id', async (req, res) => {
    try {
        const { body, success, statusCode } = await moodRecordControllers.deleteEntry(req.params.id);
        res.status(statusCode).send({ body, success, statusCode });
    } catch (error) {
        res.status(500).send({ body: error.message, success: false, statusCode: 500 });
    }
});
export { router }*/
