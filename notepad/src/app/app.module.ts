import { MaterialModule } from './modules/material/material.module';
import { NotepadService } from './modules/notepad/services/notepad.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShellComponent } from './app-components/shell/shell.component';
import { LoginComponent } from './app-components/login/login.component';
import { NavbarComponent } from './app-components/navbar/navbar.component';
import { RegisterComponent } from './app-components/register/register.component';
import { NotepadModule } from './modules/notepad/notepad.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    NotepadModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule


  ],
  providers: [NotepadService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
