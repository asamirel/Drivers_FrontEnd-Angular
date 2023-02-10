import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-list-driver',
  templateUrl: './list-driver.component.html',
  styleUrls: ['./list-driver.component.css']
})
export class ListDriverComponent implements OnInit {
  
  constructor(private appService : AppService) {}
  displayedColumns: string[] = ['firstName', 'lastName', 'phoneNumber', 'email'];
  dataSource = [];

  ngOnInit(): void {
    console.log("in")
    this.appService.getAllDrivers().subscribe(res => {
      this.dataSource = res;
      console.log(res);
    })
  }

}
