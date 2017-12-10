import * as express from 'express'
import Task from './Task'
import TaskService from './TaskService'

class App{
  public express;
  private taskService:TaskService;

  constructor(){
    this.express = express();
    this.mountRoutes();
    this.taskService = new TaskService();
  }

  private mountRoutes():void{
    const router = express.Router()

    router.get('/', (req, res) =>{
      this.taskService.GetTasks((err, result) => {
        res.json(result);
      });
    });

    this.express.use('/', router);
  }
}

export default new App().express
