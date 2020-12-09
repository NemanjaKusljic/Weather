
import * as requestNative from 'request-promise-native';
import { CityRepository } from '../../repositories/city';
import { Server } from '../server';


function randomRange(min: number, max: number) {

  const num = (Math.random() * (max - min + 1) + min);
  return num.toFixed(2);
}


export const getData = async (server: Server) => {
  try {
    let lat = randomRange(40, 70);
    let lon = randomRange(10, 70);
    let cities = 10;
    const cityRepo = new CityRepository(server);
    let appId = 'appid=fa7cf345eb57c4e04bc881583e642fab';

    const options = {
      uri: `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${cities}&${appId}`,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };

    const data = await requestNative(options);
    //iterate over list and store city
      for (const city of data.list) {
        console.log(JSON.stringify(city));
        await cityRepo.create(el => {
            el.id = city.id;
            el.name = city.name;
            el.coord = city.coord;
            el.main = city.main;
            el.dt = city.dt;
            el.wind = city.wind;
            el.sys = city.sys;
            el.weather = city.weather;
            el.clouds = city.clouds;
        })
      }

    return data;
  } catch (error) {

      console.error(JSON.stringify(error));
  }
}




