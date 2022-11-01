/* eslint-disable prettier/prettier */
import { User } from '../model/User'


interface ICreateUserDTO {
    name: string,
    email: string,
}


interface IUserRepository {

    findUserById(id: string): User;
    list(): User[];
    create({name, email}: ICreateUserDTO): void;
    findUserByEmail(email: string): User;
    turnAdmin(user: User): User;
}

export { ICreateUserDTO, IUserRepository}