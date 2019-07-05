import { ClinicalService } from './clinical.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clinical',
  templateUrl: './clinical.component.html',
  styleUrls: ['./clinical.component.css']
})
export class ClinicalComponent implements OnInit {
  public clinical: any;

  constructor(private clinicalService: ClinicalService) { }

  ngOnInit() {
    this.clinicalService.getClinical().subscribe( data =>  this.clinical = data);

  }

}
