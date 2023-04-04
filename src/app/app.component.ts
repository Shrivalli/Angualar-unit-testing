import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngUnitTestingEg';
  username:string;
  form = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
  };
  constructor()
  {
    this.title="AngUnitTestingEg";
    this.username="";
  }
  onSubmit()
{
  console.log("sucess");
}

onReset(form: NgForm): void {
  form.reset();
}
}
