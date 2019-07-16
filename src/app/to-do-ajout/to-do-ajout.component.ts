import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TodoService } from './../service/todo.service';
import { Todo } from '../models/todo';
import { Router } from '@angular/router';






@Component({
  selector: 'app-to-do-ajout',
  templateUrl: './to-do-ajout.component.html',
  styleUrls: ['./to-do-ajout.component.css']
})
export class ToDoAjoutComponent implements OnInit {

  addToDo: FormGroup;

  constructor(private fb: FormBuilder, private toastr: ToastrService, private _ts: TodoService, private router: Router) {
    [
      this.addToDo = fb.group({

        titre: new FormControl("", [
          Validators.required,
          Validators.minLength(2)
        ]),
        description: new FormControl("", [
          Validators.minLength(2)

        ])



      })


    ]
  };

  get titre() {
    return this.addToDo.get('titre');
  }
  get description() {
    return this.addToDo.get('description');
  }

  ngOnInit() {


  }

  addToDoo() {
    let token = localStorage.getItem("token");
    console.log("my token" + token);
    let data = this.addToDo.value;
   
    let todo = new Todo(data.titre, data.description);
 console.log(todo) 

    this._ts.addTodo(todo).subscribe((res) => {

      this.toastr.success("Ajout avec succee");

      this.router.navigate(['/to-do-list'])

    }, (err) => {
      this.toastr.error(err);
      console.log(err);

    });

  }

}
