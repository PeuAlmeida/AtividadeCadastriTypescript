/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
import { Request, Response } from "express";

import { FindUserByIdUseCase } from "./FindUserByIdUseCase";

export class FindUserByIdController {

    constructor(private findUserByIdUseCase: FindUserByIdUseCase) {}

    handle(request: Request, response: Response): Response {
        const { id }  = request.params
        const user = this.findUserByIdUseCase.execute({ id });

        return response.status(201).json(user);
    }
}