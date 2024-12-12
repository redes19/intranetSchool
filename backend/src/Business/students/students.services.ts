import { Pool } from "mysql2/promise";
import db from "../../models/db.model";
import { Students } from "../../models/students.model";

export class StudentsService {
    private db: Pool;

    constructor() {
        this.db = db;
    }

    public getAllStudents = async (): Promise<Students[]> => {
        try {
            const query = "SELECT id, nom AS name, prenom AS lastName, email, password FROM eleve";
            const [rows] = await this.db.query(query) as unknown as [Students[]];
            console.log('rows', rows);
            return rows;
        } catch (error) {
            console.log('Error in StudentsService.getAllStudents', error);
            throw error;
        }
    }
    
}

