/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import { UserRepository } from "modules/repositories/implementations/UserRepository";

import { FindUserByEmailController } from "./FindUserByEmailController";
import { FindUserByEmailUseCase } from "./findUserByEmailUseCase";



const userRepository = UserRepository.getINSTANCE();
const findUserByEmailUseCase = new FindUserByEmailUseCase(userRepository);
const findUserByEmailController = new FindUserByEmailController(findUserByEmailUseCase);

export {findUserByEmailController}