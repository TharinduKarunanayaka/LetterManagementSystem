import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tharindu';

  constructor(private _router : Router) { }

  ngOnInit(): void {
    if(false){

    }
    else{
      this._router.navigateByUrl('sign-in');
      localStorage.setItem('user-role', 'super-admin');
    }
  }

  // method to 
  test(){
    if(localStorage.getItem('user-role') == 'super-admin'){

    }
    else{
      
    }
  }

}
