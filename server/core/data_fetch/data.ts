//import * as express from 'express';
import { Router } from 'express'
import * as requestNative from 'request-promise-native';
//const app: Express = express();
const router = Router()

function randomRange(min: number, max: number)
{
    
    const num = (Math.random() * (max - min + 1) + min);
    return num.toFixed(2);
}


 export async function getData() {
  let lat = randomRange(40, 70);
  let lon = randomRange(10, 70);
  let cities = 10;

  let appId  = 'appid=fa7cf345eb57c4e04bc881583e642fab';

  const options = {
    uri: `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${cities}&${appId}`,
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

  const data = await requestNative(options);
   console.log(data.list)
  return data;
}

router
.route('/')
.get(getData)


  export default router



