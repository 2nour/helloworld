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
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { UserServicesService } from './service/user.service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';



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
    ToDoModifierComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],

  providers: [
    UserServicesService,
    AuthGuard
  
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
