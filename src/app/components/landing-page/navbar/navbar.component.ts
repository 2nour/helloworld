import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { UserServicesService } from './../../../services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  url = "./../assets/logo.png";
  isConnected: boolean =false;

  constructor(private router: Router, private _us: UserServicesService) { }
  isLogged: boolean = localStorage.getItem('token') != null;

  ngOnInit()
   {
    if (this._us.isLoggedUser || this._us.isLoggedAdmin) {
      this.isConnected = true;
    }
    else {
      this.isConnected = false;
    }

  }


  conn() {
    this.router.navigateByUrl('/login');
  }

  deco() {

    localStorage.removeItem('token');
    this.isConnected =false;
    this.router.navigateByUrl('/home');
  }

}
