/* eslint-disable prettier/prettier */
import {v4 as uuidv4} from 'uuid'


export class User {
    id?: string;
    email: string;
    admin: boolean;
    created_at: Date;
    update_at: Date;

    constructor() {
        if(!this.id)
        this.id = uuidv4()
    }
    

}