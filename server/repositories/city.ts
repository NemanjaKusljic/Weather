import { Server } from '../core/server';
import { Repository } from '../core/repository';
import {ICity} from '../db/models/city/city';

export class CityRepository extends Repository<ICity> {
    constructor(server: Server) {
        super({
            factory: server.factories.city,
            userId: server.systemUserId,
            aggregationQuery: {
                $match: {
                //pokazuje softdelete ne brise nego ga flaguje pa ga kveriji preskacu
                  'isDeleted': false
                }
              },
              auditLogger: server.auditLogger

        });
    }
}