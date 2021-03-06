import * as mysql from 'mysql'
import Task from './Task'
import DbConfig from './DbConfig'

export default class TaskService{
  private connection:any = mysql.createConnection({
    host: DbConfig.host,
    user: DbConfig.user,
    password: DbConfig.password,
    database: DbConfig.database,
    typeCast: function castField(field, useDefaultTypeCasting){
      if((field.type === "BIT") && (field.length === 1)){
        var bit = field.string();
        return ((bit === null) ? null : bit.charCodeAt(0)) == 1;
      }
      return(useDefaultTypeCasting());
    }
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

  public GetTask(id:number, callback:any){
    let sql = "SELECT * FROM tasks WHERE TaskID = ?";
    let params = [id];
    sql = mysql.format(sql, params);

    this.connection.query(sql, (error, results, fields) => {
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
    let inserts = [task.Title, task.TaskID];
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
