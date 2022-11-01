/* eslint-disable prettier/prettier */
import { IUserRepository } from "modules/repositories/IUserRepository";



// eslint-disable-next-line @typescript-eslint/naming-convention
interface iRequest {
  name: string;
  email: string;
}

export class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    execute({name, email}: iRequest) {
        const userAlreadyExists = this.userRepository.findUserByEmail(email);

        if(userAlreadyExists) {
            throw new Error("User Already Exists")
        }

        this.userRepository.create({ name , email })
    }
}
