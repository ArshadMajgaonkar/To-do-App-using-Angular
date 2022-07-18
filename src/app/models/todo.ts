export class Todo {
    id:number;
    content:string;
    status:boolean;

    constructor(id:number, content:string, status:boolean)
    {
        this.id=id;
        this.content=content;
        this.status=status;
    }
}
