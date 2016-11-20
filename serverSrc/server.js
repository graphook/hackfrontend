import express from 'express';
import path from 'path';

import routes from './routes.map'

import session from 'client-sessions'
import bodyParser from 'body-parser'

export default function startServer() {
  let app = express();

  app.use(session({
    cookieName: 'session',
    secret: process.env.SESSION_SECRET,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
  }));
  app.use(bodyParser.json());
  app.use('/assets', express.static(path.join(__dirname, '../uiBuild')));
  routes.forEach((route) => {
    try {
      if (route.middleware) {
        route.middleware.forEach((func) => {
          app[route.method](route.path, func);
        });
      }
      if (route.handler) {
        app[route.method](route.path, route.handler);
      }
    } catch(e) {
      console.log('Error at route ', route, e);
    }
  });
  let port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log('Application listening on ', port);
  });
}
