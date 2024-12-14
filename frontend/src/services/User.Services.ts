import axios from 'axios';
import { IUser } from '../models/user.model';

const baseURL = process.env.REACT_APP_URL_API;

export const getAllUser = async (): Promise<IUser[]> => {
    try {
        console.log("get all User")
        const  response = await axios.get<IUser[]>(`${baseURL}/user`);
        if (!response) {
            throw new Error('Network response was not ok');
          }
          const data = response.data;
          return data;
    } catch (error) {
        console.error("Error in getAllUser:", error);
        throw error;
    }
}