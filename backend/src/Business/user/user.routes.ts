import { Router } from 'express';
import { UserController } from './user.controller';

const router = Router();
const userController = new UserController();

router.get('/', userController.getAllUser);
router.get('/student', userController.getAllStudent);
router.get('/enseignant', userController.getAllProfesseur);

export default router;