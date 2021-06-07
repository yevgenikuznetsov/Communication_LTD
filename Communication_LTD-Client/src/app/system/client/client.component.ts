import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  registerClientForm: FormGroup;
  clientName: string = "";
  showClientName: boolean = false;
  isSecure: boolean = true;
  public errorMsg;

  constructor(private authSvc: AuthService) { }

  ngOnInit(): void {
    // Create the register form
    this.registerClientForm = new FormGroup({
      idRegFormControl: new FormControl(null, [
        Validators.required
      ]),
      nameRegFormControl: new FormControl(null, [
        Validators.required
      ]),
      lastNameRegFormControl: new FormControl(null, [
        Validators.required
      ]),
      phoneRegFormControl: new FormControl(null, [
        Validators.required])
    });
  }

  onSubmitRegisterClient() {
    if (!this.registerClientForm.valid) {
      return;
    }

    // Retrive email and password from registerForm
    const id = this.registerClientForm.value.idRegFormControl;
    const name = this.registerClientForm.value.nameRegFormControl;
    const lastName = this.registerClientForm.value.lastNameRegFormControl;
    const phone = this.registerClientForm.value.phoneRegFormControl;

    this.authSvc.addNewClient(id, name, lastName, phone).subscribe(
      (clientName) => {
        if (this.isSecure) {
          this.clientName = clientName["clientName"]
        } else {
          document.getElementById("demo").innerHTML = clientName["clientName"];
        }
        this.errorMsg = '';
        this.showClientName = true;
        this.registerClientForm.reset();
      },
      (error) => {
        this.showClientName = false;
        this.errorMsg = error;
      }
    )
  }
}
