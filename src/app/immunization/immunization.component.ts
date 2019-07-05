import { ImmunizationService } from './immunization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-immunization',
  templateUrl: './immunization.component.html',
  styleUrls: ['./immunization.component.css']
})
export class ImmunizationComponent implements OnInit {
  public immunization: any;
  constructor(private immunizationService: ImmunizationService) { }

  ngOnInit() {
    return this.immunizationService.getImmunization().subscribe( data => this. immunization = data);
  }

}
