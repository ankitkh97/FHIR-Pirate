import { DatabaseService } from '../database.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})


export class PatientDataComponent implements OnInit {
  public id: number;

  getValue(value) {
    if (value === 'option1') {
      console.log(value);
      return 'HAPI/3.0/Patient/';
    } else {console.log(value);
      return 'Epic/2.0/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB';
    }

  }
  onSubmit(event) {
    this.id = event.target.patient_id.value;
    console.log(this.getValue);
    this.myService.myMethod(this.id, this.getValue);
    this.router.navigate(['./home']);
  }
   constructor(public myService: DatabaseService, private router: Router) { }

  // public onLoginClick() {
  //   this.router.navigate(['./home']);
  // }


  ngOnInit() {
  }

}
