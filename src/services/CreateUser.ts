interface TechObject{
    title: string;
    experience: number ;
}

interface createUserData {
    name?: string;
    email: string;
    password : string;
    techs: Array<string | TechObject>;
}

export default function createUser({name, email, password, techs} : createUserData) {
    const user = {
        name: 'erison',
        email: 'erison@gmail.com',
        password: '123',
    }

    return user;
}