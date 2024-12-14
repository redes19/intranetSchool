import { role } from '../domain/user.model';

export interface User {
    id: number,
    nom: string,
    prenom: string,
    email: string,
    password: string
    role: role;
    createdAt: Date;
}