import { SchemaDefinition } from 'mongoose';

export const CitySchema: SchemaDefinition = {
    "coord": {
        "lon": Number,
        "lat": Number
      },
      "weather": [
        {
          "id": Number,
          "main": String,
          "description": String,
          "icon": String
        }
      ],
      "base": String,
      "main": {
        "temp": Number,
        "feels_like": Number,
        "temp_min": Number,
        "temp_max": Number,
        "pressure": Number,
        "humidity": Number
      },
      "visibility": Number,
      "wind": {
        "speed": Number,
        "deg": Number
      },
      "clouds": {
        "all": Number
      },
      "dt": Number,
      "sys": {
        "type": Number,
        "id": Number,
        "message": Number,
        "country": String,
        "sunrise": Number,
        "sunset": Number
      },
      "timezone": Number,
      "id": Number,
      "name": String,
      "cod": Number
}