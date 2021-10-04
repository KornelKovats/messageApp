import { Request, Response } from 'express';

function helloController(req: Request, res: Response){
    res.send('hello szia')
}

export {helloController}