import { Router } from 'express';
import { StudentsController } from './students.controller';

const router = Router();
const studentsController = new StudentsController();

router.get('/', studentsController.getAllStudents);

export default router;