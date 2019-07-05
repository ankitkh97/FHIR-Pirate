import { ConditionsService } from './conditions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
  public conditions: any;
  constructor(private conditionService: ConditionsService) { }

  ngOnInit() {
    return this.conditionService.getConditions().subscribe(data => this.conditions = data);
  }

}
