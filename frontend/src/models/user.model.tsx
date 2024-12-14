import { role } from '../domain/user.domain';

export interface IUser {
    id: number,
    nom: string,
    prenom: string,
    email: string,
    password: string
    role: role;
    createdAt: Date;
}