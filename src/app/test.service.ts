import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }
  
  getemployees(){
    return [
      {"id": 1, "name": "andrew", "age": 25},
      {"id": 2, "name": "sundar", "age": 21},
      {"id": 3, "name": "chintu", "age": 2},
      {"id": 4, "name": "dimpu", "age": 4},
    ]
  }


}
