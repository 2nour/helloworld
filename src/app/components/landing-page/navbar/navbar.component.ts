import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  url="./../assets/logo.png";

  constructor(private router: Router) { }
  isLogged : boolean = localStorage.getItem('token') != null ;

  ngOnInit() {

   this.updateLoggedIn();

  }

  updateLoggedIn(){
    this.isLogged = localStorage.getItem('token') != null ;
  }

  conn(){
    this.router.navigateByUrl('/login');
    this.updateLoggedIn();  }

  deco(){

    localStorage.removeItem('token');
    this.updateLoggedIn();
    this.router.navigateByUrl('/home');
  }

}
