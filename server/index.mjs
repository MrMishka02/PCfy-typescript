import express from 'express';
import pkg from 'mongoose';
const { connect, connection, Schema, model } = pkg;
import pkg2 from 'body-parser';
const { json } = pkg2;
import cors from 'cors'

const app = express();
const port = 3001;
app.use(cors())

connect('mongodb+srv://mrmishka:Coding0205@cluster0.fy5yilt.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
const db = connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const personalInfoSchema = new Schema({
  firstName: String,
  surName: String,
  team: String,
  position: String,
  email: String,
  phoneNumber: String,
  // Add more fields as needed
});

const PersonalInfo = model('PersonalInfo', personalInfoSchema);

app.use(json());

app.post('/create', (req, res) => {
  const data = req.body;
  const newPersonalInfo = new PersonalInfo(data);

  newPersonalInfo.save()
    .then(() => {
      console.log('Data created and saved to MongoDB');
      res.status(201).send('Data created and saved to MongoDB');
    })
    .catch((err) => {
      console.error('Error saving data to MongoDB:', err);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
