import * as mysql from 'mysql'
import Task from './Task'

export default class TaskService{
  private connection:any = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todoApp'
  });

  constructor(){

  }

  public GetTasks(callback:any):any{
    this.connection.connect();

    this.connection.query('SELECT * FROM tasks', (error, results, fields) => {
      if(error)
        callback(error, null);
      else
        callback(null, results);
    });

    this.connection.end();
  }

  public AddTask(task:Task, callback:any){
    console.log("Not implemented");
  }

  public UpdateTask(task:Task, callback:any){
    console.log("Not implemented");
  }

  public CloseTask(taskID:number, callback:any){
    console.log("Not implemented");
  }

}
