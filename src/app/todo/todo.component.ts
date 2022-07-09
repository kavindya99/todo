import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private router:Router,private http:HttpClient,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getTodos();
  }

  todos:any=[]
  p: number = 1;

  getTodos(){
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(res=>{
      console.log(res);
      this.todos = res;
    })
  }

  todoInfo(content1: any) {
    this.modalService.open(content1, { centered: true });
  }

}
