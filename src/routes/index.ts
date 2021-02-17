import { Router } from 'express';
const routes = Router();

routes.get('/', (request, response) => {
  return response.send('<div><h1>Hello O-Chess</h1></div>')
})

export { routes };
