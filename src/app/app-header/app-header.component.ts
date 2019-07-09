import { DatabaseService } from './../database.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  public statusCheck: boolean;

  @Input() public title: string;
  @Input() public isUserLoggedIn: boolean;

  constructor(private serv: DatabaseService) { }


  ngOnInit() {
    console.log(this.serv.varStatus);
    this.statusCheck = this.serv.varStatus;
  }

}
