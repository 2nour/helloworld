import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  subsform: FormGroup;



  constructor(private fb: FormBuilder) {
    this.subsform = fb.group(
      {
        nom: new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        prenom: new FormControl("", [
          Validators.required,
          Validators.pattern('[a-zA-Z][a-zA-Z]+')
        ]),
        tel: new FormControl("",[
          Validators.required,
        Validators.pattern('[0-9]+'),
        Validators.minLength(8)
        
        ]),
        email: new FormControl("",
        [
          Validators.required,
          Validators.email
        ]),
        motDePasse: new FormControl("",[
          Validators.required,
          Validators.minLength(6)
        ]),
        ReMotDePass: new FormControl("",[
          Validators.required,
        ])
      }
    );
  }

  get nom() 
  {
    return this.subsform.get('nom');
  }
  get prenom() 
  {
    return this.subsform.get('prenom');
  }

  get tel()
  {
    return this.subsform.get('tel');
  }
  get email()
  {
    return this.subsform.get('email');
  }

  get pass()
  {
    return this.subsform.get('motDePasse');
  }
  get confirmPass()
  {
    return this.subsform.get('ReMotDePass');
  }

  ngOnInit() {
  }

  inscription() {
    console.log(this.subsform.value);
  }

}
