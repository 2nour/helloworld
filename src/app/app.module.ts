import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ConnectionComponent } from './connection/connection.component';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { ToDoAjoutComponent } from './to-do-ajout/to-do-ajout.component';
import { ToDoModifierComponent } from './to-do-modifier/to-do-modifier.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ConnectionComponent,
    HomeComponent,
    InscriptionComponent,
    ToDoListComponent,
    ToDoAjoutComponent,
    ToDoModifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
