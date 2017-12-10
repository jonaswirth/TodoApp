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

  public CreateTask(taskTitle:string, callback:any){
    let sql = "INSERT INTO tasks (Title) VALUES (?)";
    let inserts = [taskTitle];
    sql = mysql.format(sql, inserts);

    this.connection.connect();

    this.connection.query(sql, (error, results, fields) => {
      if(error)
        callback(error);
      else
        callback(null);
    });

    this.connection.end();
  }

  public UpdateTask(task:Task, callback:any){
    console.log("Not implemented");
  }

  public CloseTask(taskID:number, callback:any){
    console.log("Not implemented");
  }

}
