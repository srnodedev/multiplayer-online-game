import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.less']
})
export class SignupComponent {
  loginValid = true;
  userName = "";
  password = "";
  confirmPassword = "";
  userID = "";

  onSubmit() {
    const valid = !this.userName || !this.userName || !this.password || !this.confirmPassword || (this.password !== this.confirmPassword);
    if(valid === true) {
      this.loginValid = false;
    }
  }
}
