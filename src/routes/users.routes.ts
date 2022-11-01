/* eslint-disable prettier/prettier */
/* eslint-disable import-helpers/order-imports */
import {  Router } from "express";

import { createUserController } from "modules/useCases/createUser";
import { findUserByEmailController } from "modules/useCases/findUserByEmail";
import { findUserByIdController } from "modules/useCases/findUserById";

const usersRoutes = Router();

usersRoutes.post('/', (request, response) => {
    return createUserController.handle(request, response);
}) 

usersRoutes.get('/', (request, response) => {
    return findUserByEmailController.handle(request, response);
})

usersRoutes.get('/:id', (request, response) => {
    return findUserByIdController.handle(request, response);
})

export { usersRoutes }
