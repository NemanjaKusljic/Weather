import { NextFunction } from 'express';
import { Types } from 'mongoose';
import { Router } from '../../core/express/router';
import { Server } from '../../core/server';
import { IRequest } from '../../core/models/express/request';
import { IResponse } from '../../core/models/express/response';
import { BadRequestError } from '../../core/error/user-friendly';
import { CityRepository } from '../../repositories/city';

export class CityRouter extends Router {
    constructor(server: Server){
        super(server);
    }

    
}