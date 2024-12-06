import { Pool } from "mysql2/promise";
import db from "../../models/db.model";
import { Students } from "../../models/students.model";

export class StudentsService {
    private db: Pool;

    constructor() {
        this.db = db;
    }

    public getAllStudents = async(): Promise<void> => {
        try {
            const query = "SELECT * FROM eleve";
            const [rows] = await this.db.query(query);
            console.log("rows", rows);
        } catch (error) {
            console.log('Error in StudentsService.getAllStudents', error);
        }
    }
}