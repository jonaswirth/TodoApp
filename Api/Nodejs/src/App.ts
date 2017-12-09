import * as express from 'express'
import Task from './Task'

class App{
  public express;

  constructor(){
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes():void{
    const router = express.Router()

    router.get('/', (req, res) =>{
      res.json(new Task());
    });

    this.express.use('/', router);
  }
}

export default new App().express
