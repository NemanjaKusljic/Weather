import { NextFunction } from 'express';
//import { Types } from 'mongoose';
import { Router } from '../../core/express/router';
import { Server } from '../../core/server';
import { Request } from 'express';
//import { BadRequestError } from '../../core/error/user-friendly';
import { CityRepository } from '../../repositories/city';
import { IResponse } from '../../core/models/express/response';

export class CityRouter extends Router {
    constructor(server: Server){
        super(server);
    }

    initRoutes() {
        this.router.route('/')
        .get(this.queryAll.bind(this));
    }
    async queryAll (request: Request, response: IResponse, next: NextFunction) {
        try {
            const cr = new CityRepository(this.server);
            response.data = await cr.query();
            console.log(response.data);
        } catch (error) {
            next(Router.handleError(error, request, response));
        }
        
    }

    
}