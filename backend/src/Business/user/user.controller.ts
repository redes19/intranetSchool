import {Request, Response } from 'express';
import { UserService} from './user.services';

export class UserController {
    private UserService : UserService;

    constructor() {
        this.UserService = new UserService;
    }


    public getAllUser = async (req : Request, res: Response): Promise<void> => {
        try {
            const user = await this.UserService.getAllUser();
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({message: "Erreur interne", error});
        }
    }

    public getAllStudent = async (req: Request, res : Response): Promise<void> => {
        try {
            const student = await this.UserService.getAllStudent();
            res.status(200).json(student);
        } catch (error) {
            res.status(500).json({message: "Erreur interne", error});
        }
    }

    public getAllProfesseur = async (req: Request, res: Response): Promise<void> => {
        try {
            const professeur = await this.UserService.getAllProfesseur();
            res.status(200).json(professeur);
        } catch (error) {
            res.status(500).json({message: "Erreur interne", error});
        }
    }
}