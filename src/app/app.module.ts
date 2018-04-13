import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

import { AlertComponent } from './_directives/alert.component';

import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/auth.service';

import { AuthGuard } from './_guards/auth.guard';
import { AnonymousGuard } from './_guards/anonymous.guard';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    AuthGuard,
    AnonymousGuard,
    AlertService,
    AuthenticationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
