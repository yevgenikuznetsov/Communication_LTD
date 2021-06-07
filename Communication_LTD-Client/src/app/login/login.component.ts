import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public errorMsg;


  constructor(private router: Router, private route: ActivatedRoute, private authSvc: AuthService, private cookieService: CookieService) { }

  ngOnInit(): void {
    // Create the register form
    this.loginForm = new FormGroup({
      userLoginFormControl: new FormControl(null, [
        Validators.required]),
      passLoginFormControl: new FormControl(null, [
        Validators.required])
    });
  }

  onSubmitLogin() {
    //Check the form is valid
    if (!this.loginForm.valid) {
      return;
    }

    const username = this.loginForm.value.userLoginFormControl;
    const password = this.loginForm.value.passLoginFormControl;

    this.authSvc.login(username, password).subscribe(
      (data) => {
        this.cookieService.set('username', data['username']);
        this.router.navigate(['/desktop']);
      },
      (error) => {
        this.errorMsg = error;
        this.loginForm.reset();
      }
    );
  }


  forgotPassword() {
    this.router.navigate(['/forgot-password'], { relativeTo: this.route });
  }

  register() {
    this.router.navigate(['/register'], { relativeTo: this.route });

  }

}
