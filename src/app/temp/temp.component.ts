import { FormdataService } from './../formdata.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserFetch } from '../user-fetch';
import { FormGroup, FormControl } from '@angular/forms';


export interface Departments {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class TempComponent implements OnInit {

  constructor(private formDataService: FormdataService) { }

  departments: Departments[] = [
    { value: 1, viewValue: 'Cardiology' },
    { value: 2, viewValue: 'Ophthalmology' },
    { value: 3, viewValue: 'Neurology' },
    { value: 4, viewValue: 'Psychology' },
    { value: 5, viewValue: 'Dermatology' }
  ];
  selectedValue: string;
  displayData: boolean;
  userFormGroup: FormGroup;
  user: UserFetch;
  users: UserFetch[] = [];

  fetchId = 0;

  idtodelete = 0;

  getUsers() {
    this.formDataService.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  getUser() {
    // tslint:disable-next-line: whitespace
    this.formDataService.getUser(this.fetchId).subscribe(data => {
      this.user = data;
      this.displayData = true;
    });
  }



  addUser() {
    this.formDataService.addUser(this.userFormGroup.value).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
    this.getUsers();
  }
  deleteUser() {

    this.formDataService.deleteUser(this.idtodelete).subscribe(data => {
      this.getUsers();
    });
  }

  ngOnInit() {
    this.userFormGroup = new FormGroup(
      {
        name: new FormControl(''),
        phone: new FormControl(''),
        date: new FormControl(''),
        time: new FormControl(''),
        department: new FormControl(''),
        reason: new FormControl(''),
        insurance: new FormControl('')
      },
    );
    this.getUser();
    this.getUsers();
    this.deleteUser();
  }

}
