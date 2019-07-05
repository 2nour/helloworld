import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConnectionComponent } from './connection/connection.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoAjoutComponent } from './to-do-ajout/to-do-ajout.component';
import { ToDoModifierComponent } from './to-do-modifier/to-do-modifier.component';
import { InscriptionComponent } from './inscription/inscription.component';


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
  },
  {
    path:'inscription',
     component:InscriptionComponent
   },
  {
    path:'to-do-list',
     component:ToDoListComponent
   },
   {
    path:'to-do-ajout',
     component:ToDoAjoutComponent
   }, {
    path:'to-do-modif',
     component:ToDoModifierComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }