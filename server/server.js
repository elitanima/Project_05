const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Использование CORS для разрешения кросс-доменных запросов
app.use(cors());
app.use(express.json());

// Подключение к MongoDB
const dbUri = 'mongodb://localhost:27017'; // Замените на вашу строку подключения
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Определение схемы и модели для счетчика
const counterSchema = new mongoose.Schema({
  count: { type: Number, default: 0 },
});

const Counter = mongoose.model('Counter', counterSchema);

// Создание начального документа, если он не существует
const initCounter = async () => {
  const counter = await Counter.findOne();
  if (!counter) {
    await new Counter({ count: 0 }).save();
    console.log('Initialized counter in database');
  }
};
initCounter();

// Основные маршруты API
app.get('/data', async (req, res) => {
  try {
    const counter = await Counter.findOne();
    res.json(counter);
  } catch (error) {
    res.status(500).send('Error fetching data');
  }
});

app.post('/increment', async (req, res) => {
  try {
    const counter = await Counter.findOne();
    if (counter) {
      counter.count++;
      await counter.save();
      res.json(counter);
    } else {
      res.status(404).send('Counter not found');
    }
  } catch (error) {
    res.status(500).send('Error updating counter');
  }
});

app.post('/decrement', async (req, res) => {
  try {
    const counter = await Counter.findOne();
    if (counter) {
      counter.count--;
      await counter.save();
      res.json(counter);
    } else {
      res.status(404).send('Counter not found');
    }
  } catch (error) {
    res.status(500).send('Error updating counter');
  }
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
