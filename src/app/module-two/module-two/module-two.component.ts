import {Component} from '@angular/core';
import {DataService} from '../../data.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/User';

@Component({
  selector: 'app-module-two',
  templateUrl: './module-two.component.html',
  styleUrls: ['./module-two.component.css']
})
export class ModuleTwoComponent  {
  str: string;
  formModuleTwo: FormGroup;
  login: FormControl = new FormControl('', [Validators.required]);
  password: FormControl = new FormControl('', [Validators.required]);
  user: User;
  constructor(private dataService: DataService) {
    this.formModuleTwo = new FormGroup({
      login: this.login,
      password: this.password,
    });
    this.user = this.dataService.getState();
  }


  setData(formModuleTwo: FormGroup): void {
    this.dataService.setState( { ...this.dataService.getState(), login: this.login.value, password: this.password.value});
    this.user = this.dataService.getState();

  }
}
