import { Request, Response } from "express";
import {MovieModel} from '../models/Movies';
import Logger from "../../config/logger";

export  async function createMovie(req: Request, res: Response) {
    try {
        const movie = new MovieModel(req.body);
        await movie.save();
        res.status(201).send(movie);
        
    } catch (error:any) {
        Logger.error(error.message);
        res.status(400).send(error.message);
    }
}