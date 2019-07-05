import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConnectionComponent } from './connection/connection.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  
  {
    path:'home',
    component:HomeComponent
  },

  {
   path:'connection',
    component:ConnectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
