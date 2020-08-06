import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-module-three',
  templateUrl: './module-three.component.html',
  styleUrls: ['./module-three.component.css']
})
export class ModuleThreeComponent  {
  formModuleThree: FormGroup;
  email: FormControl = new FormControl('', [Validators.required]);
  address: FormControl = new FormControl('', [Validators.required]);
  user: User;
  constructor(private dataService: DataService) {
    this.formModuleThree = new FormGroup({
        email: this.email,
        address: this.address,
      },
    );
    this.user = this.dataService.getState();

  }


  setData(formModuleThree: FormGroup): void {
    this.dataService.setState( { ...this.dataService.getState(), email: this.email.value, address: this.address.value});
    this.user = this.dataService.getState();

  }
}
