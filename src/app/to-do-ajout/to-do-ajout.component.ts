import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-to-do-ajout',
  templateUrl: './to-do-ajout.component.html',
  styleUrls: ['./to-do-ajout.component.css']
})
export class ToDoAjoutComponent implements OnInit {

  addToDo: FormGroup;

  constructor(private fb: FormBuilder) {
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
  }

  get titre() {
    return this.addToDo.get('titre');
  }
  get description() {
    return this.addToDo.get('description');
  }

  ngOnInit() {
  }
  addToDoo() {
    console.log(this.addToDo.value);
  }

}
