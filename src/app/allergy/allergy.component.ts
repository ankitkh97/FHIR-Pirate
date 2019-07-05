import { AllergyService } from './allergy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css']
})
export class AllergyComponent implements OnInit {
  public allergy: any;
  constructor(private allergyService: AllergyService) { }

  ngOnInit() {
    return this.allergyService.getAllergy().subscribe(data => this.allergy = data);

  }


}
