import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  details = [{
        "id": 1,
        "first_name": "Naseem",
        "last_name": "Ahamed",
        "email": "naseem@gmail.com",
        "car_make": "GMC",
        "car_model": "1500",
        "vin_number": "ERT6788NJ",
        "manufactureDate": "3/3/1990",
        "age_vehicle": 20
      },
      {
        "id":2,
        "first_name": "Naseem",
        "last_name": "Ahamed",
        "email": "naseem@gmail.com",
        "car_make": "GMC",
        "car_model": "1500",
        "vin_number": "ERT6788NJ",
        "manufactureDate": "3/3/1990",
        "age_vehicle": 20
      },
      {
        "id": 3,
        "first_name": "Naseem",
        "last_name": "Ahamed",
        "email": "naseem@gmail.com",
        "car_make": "GMC",
        "car_model": "1500",
        "vin_number": "ERT6788NJ",
        "manufactureDate": "3/3/1990",
        "age_vehicle": 20
      }]
  getDetails() {
    return this.details
  }
}
