import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/User';
import {DataService} from '../data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  myForm: FormGroup;
  login: FormControl;
  password: FormControl;
  name: FormControl;
  address: FormControl;
  email: FormControl;
  user: User;
  count: number;

  constructor(private dataService: DataService) {
    this.login = new FormControl('', [Validators.required]),
      this.password = new FormControl('', [Validators.required]),
      this.name = new FormControl('', [Validators.required]),
      this.email = new FormControl('', [Validators.required]),
      this.address = new FormControl('', [Validators.required]),
      this.myForm = new FormGroup({
        login: this.login,
        password: this.password,
        name: this.name,
        email: this.email,
        address: this.address,

      });
    this.user = this.dataService.getState();
    this.count = 0;
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

  setCount(value: number): void {
    this.count += value;
  }
}
