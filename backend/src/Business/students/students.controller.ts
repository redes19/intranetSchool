import {Request, Response } from 'express';
import { StudentsService} from './students.services';

export class StudentsController {
    private StudentsService : StudentsService;

    constructor() {
        this.StudentsService = new StudentsService;
    }


    public getAllStudents = async (req : Request, res: Response): Promise<void> => {
        try {
            const students = await this.StudentsService.getAllStudents();
        } catch (error) {
            res.status(500).json({message: "Erreur interne", error});
        }

    }
}