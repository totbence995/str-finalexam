import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

export class Column{
  name:string="";
  title:string="";
  type:string="";
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  columns:Column[]=[
    {name:"id", title:"#", type:"text"},
    {name:"name", title:"Name", type:"text"},
    {name:"email", title:"Email", type:"email" },
    {name:"address", title:"Address", type: "text"},
    {name:"active", title:"Active", type: "checkbox" },
  ];

  users$: Observable<User[]> = this.userService.getAll();
  phrase:string ="";
  currentCol:string="";

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }

  onDelete(user:User){
    this.userService.remove(user).subscribe(i=>{
    });
    this.userService.getAll().subscribe(i=>{

    })
  }

  onChangePhrase(event:Event){
    this.phrase = (event.target as HTMLInputElement).value;
  }

  onHeaderClick(column:string){
    this.currentCol = column;
  }
}
