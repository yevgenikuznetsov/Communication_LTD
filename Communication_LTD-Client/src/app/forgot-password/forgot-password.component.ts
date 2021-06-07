import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  forgotPassForm: FormGroup;

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    // Create the forgot Password form
    this.forgotPassForm = new FormGroup({
      userForgotPassFormControl: new FormControl(null, [
        Validators.required])
    });

  }

  onSubmitForgotPass() {
    //Check the form is valid
    if (!this.forgotPassForm.valid) {
      return;
    }

    const username = this.forgotPassForm.value.userForgotPassFormControl;
    console.log("forgot")
    this.authSvc.forgotPassword(username).subscribe(
      (data) => {
        console.log(data)
      },
      (error) => {
        console.log(error)
      }
    );;

  }
}
