import {Request, Response} from 'express';
import createUser from "./services/CreateUser";

export function helloWorld(request : Request, response: Response) {
    const user = createUser({
        name'erison',
        email: 'erison@gmail.com',
        password: '123',
        techs: [
            'Node.js',
            'ReactJS',
            'react native',
            {title: 'Python', experience: 100}
        ]
    });
    return response.json({message : "hello World!"});
}

