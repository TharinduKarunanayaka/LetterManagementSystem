import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-home',
  templateUrl: './default-home.component.html',
  styleUrls: ['./default-home.component.scss']
})
export class DefaultHomeComponent implements OnInit {

  // define variables
  studentArray: any[] = [
    { name: 'shehan', age: 23, marks: 40 },
    { name: 'thari', age: 25, marks: 80 }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
