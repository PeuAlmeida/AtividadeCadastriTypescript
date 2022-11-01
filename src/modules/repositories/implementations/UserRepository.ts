/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable no-param-reassign */
import { User } from '../../model/User'
import { ICreateUserDTO, IUserRepository } from '../IUserRepository';


export class UserRepository implements IUserRepository {

    private users: User[];

    private static INSTANCE: UserRepository;

    private constructor() {
        this.users = []
    }

    public static getINSTANCE(): UserRepository {
        if (!UserRepository.INSTANCE) {
            UserRepository.INSTANCE = new UserRepository;
        }

        return UserRepository.INSTANCE
    }

    findUserById(id: string): User {
        const user = this.users.find(user => user.id === id);
        return user
    }

    list(): User[] {
        return this.users;
    }

    create({ name, email }: ICreateUserDTO): void {
        const user = new User();

        Object.assign(user, {
            name,
            email,
            admin: false,
            created_at: new Date(),
            update_at: new Date()
        })

        this.users.push(user)
    }

    findUserByEmail(email: string): User {
        const user = this.users.find(user => user.email === email);
        return user;
    }
    
    turnAdmin(user: User): User {
        
        user.admin = true
        user.update_at = new Date()

        return user;
    }

}