import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changePassForm: FormGroup;
  public errorMsg;

  constructor(private authSvc: AuthService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    // Create the change Password form
    this.changePassForm = new FormGroup({
      oldPasschangePassFormControl: new FormControl(null, [
        Validators.required]),
      newPasschangePassFormControl: new FormControl(null, [
        Validators.required])
    });
  }

  onSubmitChangePass() {
    //Check the form is valid
    if (!this.changePassForm.valid) {
      return;
    }

    const oldPassword = this.changePassForm.value.oldPasschangePassFormControl;
    const newPassword = this.changePassForm.value.newPasschangePassFormControl;
    const username = this.cookieService.get('username');

    this.authSvc.changePassword(username, oldPassword, newPassword).subscribe(
      () => {
        this.router.navigate(['/desktop']);
      },
      (error) => {
        this.errorMsg = error;
        this.changePassForm.reset();
      }
    );
  }
}
