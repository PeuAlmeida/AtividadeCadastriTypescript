/* eslint-disable prettier/prettier */
import { User } from "modules/model/User";
import { UserRepository } from "modules/repositories/implementations/UserRepository"


// eslint-disable-next-line @typescript-eslint/naming-convention
interface iRequest {
    id: string;
}

export class FindUserByIdUseCase {
    constructor(private userRepository: UserRepository) {}

    execute({ id } : iRequest): User{
        const user = this.userRepository.findUserById(id);

        return user;
    }
}