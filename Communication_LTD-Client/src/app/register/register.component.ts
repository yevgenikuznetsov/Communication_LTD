import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  public errorMsg;

  constructor(private router: Router, private route: ActivatedRoute, private authSvc: AuthService) { }

  ngOnInit(): void {
    // Create the register form
    this.registerForm = new FormGroup({
      emailRegFormControl: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      passRegFormControl: new FormControl(null, [
        Validators.required
      ]),
      userRegFormControl: new FormControl(null, [
        Validators.required])
    });
  }

  onSubmitRegister() {
    //Check the form is valid
    if (!this.registerForm.valid) {
      return;
    }

    // Retrive email and password from registerForm
    const email = this.registerForm.value.emailRegFormControl;
    const password = this.registerForm.value.passRegFormControl;
    const username = this.registerForm.value.userRegFormControl;

    this.authSvc.register(username, email, password).subscribe(
      () => {
        this.router.navigate(['/login'], { relativeTo: this.route });
      },
      (error) => {
        this.errorMsg = error;
      });
  }

  login() {
    this.router.navigate(['/login'], { relativeTo: this.route });
  }
}
