import axios from 'axios';
import { IStudent } from '../models/students.model';

const baseURL = process.env.REACT_APP_URL_API;

export const getAllStudents = async (): Promise<IStudent[]> => {
    try {
        console.log("get all students")
        const  response = await axios.get<IStudent[]>(`${baseURL}/students`);
        if (!response) {
            throw new Error('Network response was not ok');
          }
          const data = response.data;
          return data;
    } catch (error) {
        console.error("Error in getAllStudents:", error);
        throw error;
    }
}