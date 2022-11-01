/* eslint-disable prettier/prettier */
import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";


export class CreateUserController {
    
    
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    handle(request: Request, response: Response) {
        const { name, email } = request.body;

        this.createUserUseCase.execute({ name, email });
    return response.status(201).send()
    }
    
    constructor(private createUserUseCase: CreateUserUseCase) {}

}