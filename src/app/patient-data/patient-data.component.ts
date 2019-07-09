import { DatabaseService } from '../database.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css']
})


export class PatientDataComponent implements OnInit {
  public id: number;
  public fhirURL: string;
  public var1: string;
  public myVar: boolean;

  practitioner() {
    this.myVar = true;
  }
  patient() {
    this.myVar = false;
  }


 getValue(value) {
    if (value === 'option1') {
      this.var1 = 'HAPI/3.0/Patient/';
    } else {
      this.var1 = 'Epic/2.0/Patient/Tbt3KuCY0B5PSrJvCu2j-PlK.aiHsu2xUjUM8bWpetXoB';
    }

    this.fhirURL = this.var1;

  }
  onSubmit(event) {
    this.id = event.target.patient_id.value;
    console.log(this.myVar);
    this.myService.varStatus = this.myVar;
    this.myService.myMethod(this.id, this.fhirURL);
    this.router.navigate(['./home']);
  }


   constructor(public myService: DatabaseService, private router: Router) { }

  // public onLoginClick() {
  //   this.router.navigate(['./home']);
  // }


  ngOnInit() {
  }

}
