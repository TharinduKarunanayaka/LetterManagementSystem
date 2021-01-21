import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.scss']
})
export class IconBoxComponent implements OnInit {

  // define variables
  @Input() name : string;
  @Input() age : number;
  @Input() marks : number;

  isPass : boolean;

  constructor() { }

  ngOnInit(): void {
    if(this.marks > 40){
      this.isPass = true;
    }
    else{
      this.isPass = false;
    }
  }

}
