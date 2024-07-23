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
