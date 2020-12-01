//import * as express from 'express';
import { Router } from 'express'
import * as rpn from 'request-promise-native';
//const app: Express = express();
const router = Router()

function randomRange(min: number, max: number)
{
    
    const num = (Math.random() * (max - min + 1) + min);
    return num.toFixed(2);
}


const getData = (req:any, res:any) => {
  let lat = randomRange(-85, 85);
  let lon = randomRange(-180, 180);
  let cities = 10;

  let appId  = 'appid=fa7cf345eb57c4e04bc881583e642fab';

  const options = {
    uri: `http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lon}&cnt=${cities}&${appId}`,
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
};

  rpn(options)
    .then(parsedBody => {
      console.log(parsedBody)
      res.json(parsedBody);
    })
    .catch(err => {
      res.send(err);
    })
}

router
.route('/')
.get(getData)


  export default router

  //koristiti request-promise biblioteku da bude ljepse
  /* u server.ts na 205 on pravi usera, ako ga nema sa 
  propertijem isSystem. */


