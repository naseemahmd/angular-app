import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service"

@Component({
  selector: 'app-vehicale-detail',
  templateUrl: './vehicale-detail.component.html',
  styleUrls: ['./vehicale-detail.component.css'],
  providers: [DataService]
})
export class VehicaleDetailComponent implements OnInit {

  public vehicle_details = [] as any;
  
  constructor(private dService:DataService) { }

  ngOnInit() {
    this.vehicle_details = this.dService.getDetails()
  }

}
