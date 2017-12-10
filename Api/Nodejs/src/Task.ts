export default class Task{
  public taskId:number;
  public title:string;
  public created:Date;
  public closed:boolean;

  constructor(){
    this.title = "Hello World!"
    this.created = new Date();
    this.closed = false;
  };
}
