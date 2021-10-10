import { promises as fs } from 'fs';
import { uuid } from 'uuidv4';
import path from 'path';

const postUserService = {
     addUser: async (name: string) => {
         const newUser = {
             id : uuid,
             name : name
         }
         const users = JSON.parse(await fs.readFile(path.resolve(__dirname, '../../src/db/data.json'), 'utf-8'));
         users.users.push(newUser);
         await fs.writeFile(JSON.stringify(path.resolve(__dirname, '../../src/db/data.json')),users,'utf-8');
        return ;
    }
}

export {postUserService}