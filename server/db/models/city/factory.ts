import { Connection } from 'mongoose';
import { Factory } from '../../../core/db/factory';
import {CitySchema} from './schema';
import {ICity} from './city';

export class CityFactory extends Factory<ICity> {
    constructor(connection: Connection) {
        super({
          connection: connection,
          name: 'City',
          definition: CitySchema,
        });
      }
}