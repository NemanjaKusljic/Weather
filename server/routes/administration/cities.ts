import { NextFunction } from 'express';
//import { Types } from 'mongoose';
import { Router } from '../../core/express/router';
import { Server } from '../../core/server';
import { Request } from 'express';
//import { BadRequestError } from '../../core/error/user-friendly';
import { CityRepository } from '../../repositories/city';
import { IResponse } from '../../core/models/express/response';
//import { ICity } from '../../db/models/city/city';

export class CityRouter extends Router {
    constructor(server: Server){
        super(server);
        // this.initRoutes(); no need will duplicate route
    }

    initRoutes() {
        this.router.route('/')
        .get(this.queryAllCities.bind(this));

        this.router.route('/new_city')
        .post(this.createCity.bind(this));
    }
    async queryAllCities (request: Request, response: IResponse, next: NextFunction) {
        try {
            const cr = new CityRepository(this.server);

            response.data = await cr.databaseModel.find({});
            next();
        } catch (error) {
            next(Router.handleError(error, request, response));
        }
        
    }

    async createCity (request: Request, response: IResponse, next: NextFunction) {
        try {
            const cr = new CityRepository(this.server);
            const city = request.body;
            
            
            
            await cr.create(el => {
                el.id = Math.floor(Math.random()*10000) + 1;
                el.name = city.name;
                el.sys.country = city.country;
            });
            response.data = city;
            next();
        } catch (error){
            next(Router.handleError(error, request, response));
        }
    }

    
}