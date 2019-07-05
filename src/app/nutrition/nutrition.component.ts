import { NutritionService } from './nutrition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutrition',
  templateUrl: './nutrition.component.html',
  styleUrls: ['./nutrition.component.css']
})
export class NutritionComponent implements OnInit {

  public nutrition: any;

  constructor(private nutritionService: NutritionService) { }

  ngOnInit() {
    this.nutritionService.getNutrition().subscribe(data =>  this.nutrition = data);

  }

}
