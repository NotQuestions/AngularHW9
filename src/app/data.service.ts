import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from './models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private state: BehaviorSubject<User> = new BehaviorSubject<User>({ login: 'Kolaps', password: 'HardPassword', name: 'Robert', email: 'robert67@gmail.com', address: 'New York', });


  getState(): User{
    return this.state.getValue();
  }
  setState(value): void{
    this.state.next(value);
  }
}
