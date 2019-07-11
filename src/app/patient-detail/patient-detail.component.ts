import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';


@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {


  public patient: any;

  constructor( private patientService: DatabaseService) { }

  ngOnInit() {

    /* this.patientService.getPatients()
    .subscribe( data => this.patients=data); */

   this.patientService.getPatient().subscribe(data =>  this.patient = data);

  }

}
