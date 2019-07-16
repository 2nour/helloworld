import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/user'
import { UserServicesService } from './../service/user.service';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  connForm: FormGroup;
  user: User;
  token : string;
  isLogged : boolean = localStorage.getItem('token') != null ;

 

  constructor(private fb: FormBuilder, private _us: UserServicesService, private toastr: ToastrService,private route :Router) {

    this.connForm = fb.group({
      email: new FormControl("", [
        Validators.required,
        Validators.email
      ]),
      pass: new FormControl("", [
        Validators.required,

      ])
    })
  }


  get email() {
    return this.connForm.get('email');
  }
  get pass() {
    return this.connForm.get('pass');
  }
  ngOnInit() {
    this.isLogged = localStorage.getItem('token') != null ;


  }

  connection() {
    
    let data = this.connForm.value; 

    let user = new User(null,null,null,data.email,data.pass);

    this._us.userConnection(user).subscribe((res) => {
    
      this.toastr.success('connected');
      localStorage.setItem('token',res.token);
      console.log(res.token);
      this.route.navigateByUrl('/to-do-list');
      this.ngOnInit();

    
    }, (err) => {

      this.toastr.error(err.error.message);
      console.log(err);
    });

  }



}
