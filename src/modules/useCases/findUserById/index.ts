/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import { UserRepository } from "modules/repositories/implementations/UserRepository";

import { FindUserByIdController } from "./FindUserByIdController";
import { FindUserByIdUseCase } from "./FindUserByIdUseCase";



const userRepository = UserRepository.getINSTANCE();
const findUserByIdUseCase = new FindUserByIdUseCase(userRepository);
const findUserByIdController = new FindUserByIdController(findUserByIdUseCase);

export {findUserByIdController}