import express from 'express';
import StudentsRoutes from './Business/students/students.routes';

const app = express();

app.use(express.json());

// Routes Students
app.use('/students', StudentsRoutes);

export default app;