import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './models/db.model';
import bodyParser from "body-parser";
import appRoutes from './app.routes';

dotenv.config({ path: './src/.env' });

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());

// Routes principales
app.use("/api", appRoutes);

db.getConnection()
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.log('Error connecting to the database: ', err));

  
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});