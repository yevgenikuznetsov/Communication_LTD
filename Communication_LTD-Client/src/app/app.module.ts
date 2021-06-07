import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SystemComponent } from './system/system.component';
import { NavbarComponent } from './system/navbar/navbar.component';
import { CookieService } from 'ngx-cookie-service';
import { ClientComponent } from './system/client/client.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ChangePasswordComponent,
    ForgotPasswordComponent,
    SystemComponent,
    NavbarComponent,
    ClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent],

})
export class AppModule { }
