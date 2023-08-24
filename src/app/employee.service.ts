import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
    return [
      {'id': 1, 'name': "ay haga", 'age': 20},
      {'id': 2, 'name': "ay haga1", 'age': 50},
      {'id': 3, 'name': "ay haga2", 'age': 16},
      {'id': 4, 'name': "ay haga3", 'age': 43}
    ];
  }
}
