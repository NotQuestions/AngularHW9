import {Component} from '@angular/core';
import {FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import {DataService} from './data.service';
import {User} from './models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  login: FormControl;
  password: FormControl;
  name: FormControl;
  address: FormControl;
  email: FormControl;
  user: User;

  constructor(private dataService: DataService) {
  this.login =  new FormControl('', [Validators.required]),
  this.password =  new FormControl('', [Validators.required]),
  this.name =  new FormControl('', [Validators.required]),
  this.email =  new FormControl('', [Validators.required]),
  this.address =  new FormControl('', [Validators.required]),
    this.myForm = new FormGroup({
      login: this.login,
      password: this.password,
      name: this.name,
      email: this.email,
      address: this.address,

    });
  }

  checkingValid(myForm: FormGroup): void {
    this.dataService.setState({
      login: this.login.value,
      password: this.password.value,
      name: this.name.value,
      address: this.address.value,
      email: this.email.value,
    });
    this.setUser(this.dataService.getState());
  }

  setUser(user: User): void {
    this.user = user;
  }
}
