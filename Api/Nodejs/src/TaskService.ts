import * as mysql from 'mysql'
import Task from './Task'

export default class TaskService{
  private connection:any = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todoapp'
  });

  constructor(){

  }

  public GetTasks(callback:any):any{
    this.connection.query('SELECT * FROM tasks', (error, results, fields) => {
      if(error)
        callback(error, null);
      else
        callback(null, results);
    });
  }

  public CreateTask(taskTitle:string, callback:any){
    let sql = "INSERT INTO tasks (Title) VALUES (?)";
    let inserts = [taskTitle];
    sql = mysql.format(sql, inserts);

    this.connection.query(sql, (error, results, fields) => {
      if(error)
        callback(error);
      else
        callback(null);
    });
  }

  public UpdateTask(task:Task, callback:any){
    let sql = "UPDATE tasks SET Title = ? WHERE TaskID = ?";
    let inserts = [task.title, task.taskId];
    sql = mysql.format(sql, inserts);


    this.connection.query(sql, (error, results, fields) => {
      if(error)
        callback(error);
      else
        callback(null);
    });
  }

  public CloseTask(taskID:number, callback:any){
    let sql = "UPDATE tasks SET Closed = 1 WHERE TaskID = ?"
    let inserts = [taskID];
    sql = mysql.format(sql, inserts);

    this.connection.query(sql, (error, results, fields) => {
      if(error)
        callback(error);
      else
        callback(null);
    });
  }

}
