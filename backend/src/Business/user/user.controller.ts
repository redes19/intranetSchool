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
}