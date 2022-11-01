/* eslint-disable prettier/prettier */
import { User } from "modules/model/User";
import { UserRepository } from "modules/repositories/implementations/UserRepository"


// eslint-disable-next-line @typescript-eslint/naming-convention
interface iRequest {
    email: string
}

export class FindUserByEmailUseCase {
    constructor(private userRepository: UserRepository) {}

    execute({email}: iRequest): User{
        const user = this.userRepository.findUserByEmail(email);

        return user;
    }
}