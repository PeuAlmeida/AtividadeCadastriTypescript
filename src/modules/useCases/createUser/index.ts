/* eslint-disable prettier/prettier */
import { UserRepository } from "modules/repositories/implementations/UserRepository";

import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = UserRepository.getINSTANCE();
const createUserUseCase = new CreateUserUseCase(userRepository);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserController };
