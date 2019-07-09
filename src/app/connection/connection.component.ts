import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  connForm : FormGroup;

  constructor(private fb:FormBuilder) { 
     
    this.connForm=fb.group({
      email : new FormControl("",[
        Validators.required,
        Validators.email
      ]),
      pass : new FormControl("",[
        Validators.required,

      ])
    })
  }


  get email()
  {
    return this.connForm.get('email');
  }
  get pass()
  {
    return this.connForm.get('pass');
  }
  ngOnInit() {
  }
  
  connection()
  {
    console.log(this.connForm.value);
  }



}
