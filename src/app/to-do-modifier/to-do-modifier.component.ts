import { Component, OnInit,Input } from '@angular/core';
import { Todo } from '../models/todo';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { TodoService } from './../service/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-to-do-modifier',
  templateUrl: './to-do-modifier.component.html',
  styleUrls: ['./to-do-modifier.component.css']
})
export class ToDoModifierComponent implements OnInit {

  todo :Todo;
  @Input() private parentData; 
  


  formModif: FormGroup;
  constructor(private _ts: TodoService, router: Router, fb: FormBuilder) {
    this.formModif = fb.group({

      titre: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      description: new FormControl("", [
        Validators.minLength(2)
      ])
    })

  }

  get titre() {
    return this.formModif.get('titre');
  }
  get description() {
    return this.formModif.get('description');
  }


  ngOnInit() {
  }



  Modifier()
  {
    
  }
}
