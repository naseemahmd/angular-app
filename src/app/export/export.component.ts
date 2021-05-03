import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {
  age: any = ''
  constructor() { }

  ngOnInit(): void {
  }
  onClickMe() {
    console.log(this.age)
  }
}
