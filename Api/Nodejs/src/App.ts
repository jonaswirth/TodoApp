import * as express from 'express'
import * as bodyParser from 'body-parser'

import Task from './Task'
import TaskService from './TaskService'

class App{
  public express;
  private taskService:TaskService;

  constructor(){
    this.express = express();
    this.express.use(bodyParser.json());
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

    router.post('/create', (req, res) => {
      this.taskService.CreateTask(req.body.taskTitle, (err) => {
        if(err){
          res.status(500);
          res.json({"Message": "Internal Server Error"});
        }else{
          res.status(200);
          res.send();
        }
      });
    });

    router.put('/edit', (req, res) => {
      this.taskService.UpdateTask(req.body.task, (err) => {
        if(err){
          res.status(500);
          res.json({"Message": "Internal Server Error"});
        }else{
          res.status(200);
          res.send();
        }
      });
    });

    router.put('/close/:id', (req, res) => {
      this.taskService.CloseTask(req.params.id, (err) => {
        if(err){
          res.status(500);
          res.json({"Message": "Internal Server Error"});
        }else{
          res.status(200);
          res.send();
        }
      });
    });

    this.express.use('/', router);
  }
}

export default new App().express
