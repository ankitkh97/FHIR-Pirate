
import { DatabaseService } from '../database.service';
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.css'],
  encapsulation: ViewEncapsulation.None

})


export class PatientDataComponent implements OnInit {
  public id: number;
  public url: string;
  public var1: string;
  public myVar: boolean;
  disableSelect = new FormControl(false);
  EHRcontrol = new FormControl('', [Validators.required]);
  patientForm: FormGroup;
  submitted = false;
  constructor(public myService: DatabaseService, private router: Router, private formBuilder: FormBuilder) { }


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
  }


  onSubmit(event) {
    this.submitted = true;

    if (this.patientForm.invalid) {
      return;
    }
    this.id = event.target.patient_id.value;
    this.myService.varStatus = this.myVar;
    this.myService.myMethod(this.id, this.var1);
    this.router.navigate(['./home']);
  }





  ngOnInit() {
    this.patientForm = this.formBuilder.group({
      'id': [null, [Validators.required]],
      'selection': [null, [Validators.required]]
    });
  }

  get f() {
    return this.patientForm.controls;
  }


}
