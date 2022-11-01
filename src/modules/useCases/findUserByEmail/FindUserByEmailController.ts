/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import { Request, Response } from "express";

import { FindUserByEmailUseCase } from "./findUserByEmailUseCase";

export class FindUserByEmailController {

    constructor(private findUserByEmailUseCase: FindUserByEmailUseCase) {}

    handle(request: Request, response: Response): Response {
        const {email} = request.body
        const user = this.findUserByEmailUseCase.execute(email);

        return response.status(201).json(user);
    }
}