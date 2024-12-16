import { Pool } from "mysql2/promise";
import db from "../../models/db.model";
import { User } from "../../models/user.model";

export class UserService {
    private db: Pool;

    constructor() {
        this.db = db;
    }

    public getAllUser= async (): Promise<User[]> => {
        try {
            const query = "SELECT * FROM user";
            const [rows] = await this.db.query(query) as unknown as [User[]];
            // console.log('rows', rows);
            return rows;
        } catch (error) {
            console.log('Error in UserService.getAllUser', error);
            throw error;
        }
    }

    public getAllStudent = async (): Promise<User[]> => {
        try {
            const query = 'SELECT * FROM user WHERE role="eleve"';
            const [rows] = await this.db.query(query) as unknown as [User[]];
            return rows;
        } catch (error) {
            console.log('Error in UserService.getAllUser', error);
            throw error;
        }
    }

    public getAllProfesseur = async (): Promise<User[]> => {
        try {
            const query = 'SELECT * FROM user  WHERE role="enseignant"';
            const [rows] = await this.db.query(query) as unknown as [User[]];
            return rows;
        } catch (error) {
            console.log('Error in UserService.getAllUser', error);
            throw error;
        }
    }
    
}

