import { Request} from 'express';
import { promises as fs } from 'fs';
import path from 'path';

const getUserService = {
     getUsers: async (body: Request) => {
        const users = JSON.parse(await fs.readFile(path.resolve(__dirname, '../../src/db/data.json'), 'utf-8'));
        return users.users;
    }
}

export {getUserService}