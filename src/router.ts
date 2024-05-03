
import {Router, Request, Response} from 'express';
import { createMovie } from './controllers/movieControllers';

import { validate } from './middleware/handleValidation';
import { movieCreateValidation } from './middleware/movieValidation';

const router = Router()

export default router.get('/test', (req: Request, res: Response) => {
  res.send('Hello World');
})
.post('/movies', movieCreateValidation(), validate, createMovie)