import { MedicationService } from './medication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  public medication: any;
  public organisation: any;

  constructor(private medicationService: MedicationService) { }

  ngOnInit() {
    this.medicationService.getMedication().subscribe(data => this.medication = data);
    this.medicationService.getOrganisation().subscribe(data => this.organisation = data);

  }

}
