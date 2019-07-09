import { MatDatepickerModule } from '@angular/material/datepicker';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  constructor(public firstName: string = '',
              public phoneNumber: string = '',
              public dob: MatDatepickerModule = null,
              public email: string = '',
              public time: string = '',
              public department: string = 'Select department',
              public reason: string = '',
              public insurance: string = '') { }

  registrations: AppointmentComponent[] = [];


  ngOnInit() {  }

}
// tslint:disable-next-line: class-name

