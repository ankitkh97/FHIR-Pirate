import { DatabaseService } from './../database.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public statusCheck: boolean;
  constructor(private service: DatabaseService) { }

  ngOnInit() {
    this.statusCheck = this.service.varStatus;
  }

}
