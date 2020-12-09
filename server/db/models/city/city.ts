import { IIdentifier } from '../../../core/models/db/identifier';
import { IAuditInfo, ISoftDelete } from '../../../core/models/db/audit-info';

export interface ICity extends IIdentifier, ISoftDelete, IAuditInfo {
    id: Number,
    name: String,
    coord: {
      lon: Number,
      lat: Number
    },
    main: {
      temp: Number,
      feels_like: Number,
      temp_min: Number,
      temp_max: Number,
      pressure: Number,
      humidity: Number
    },
    dt: Number,
    wind: {
      speed: Number,
      deg: Number
    },
    sys: {
      // type: Number,
      // id: Number,
      // message: Number,
      country: String
      // sunrise: Number,
      // sunset: Number
    },
    weather: [
      {
        id: Number,
        main: String,
        description: String,
        icon: String
      }
    ],
    clouds: {
      all: Number
    }
}