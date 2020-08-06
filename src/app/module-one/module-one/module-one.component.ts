import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from '../../data.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-module-one',
  templateUrl: './module-one.component.html',
  styleUrls: ['./module-one.component.css']
})
export class ModuleOneComponent {
  formModuleOne: FormGroup;
  name: FormControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
  user: User;

  constructor(private dataService: DataService) {
    this.formModuleOne = new FormGroup({name: this.name});
    this.user = this.dataService.getState();
  }

  setData(formModuleOne: FormGroup): void {
    this.dataService.setState({...this.dataService.getState(), name: this.name.value});
    this.user = this.dataService.getState();
  }

}
