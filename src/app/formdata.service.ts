
import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';



@Injectable({
  providedIn: 'root'
})
export class FormdataService implements InMemoryDbService{
  createDb(){
    const patient = [
      { id: 1967197, name: 'Peter James'}
    ];
    return {patient};
  }

constructor() { }


}
