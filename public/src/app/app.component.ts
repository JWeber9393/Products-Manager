import { Component } from '@angular/core';

import { HttpService } from './http.service' //Import Service*

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product Manager';
  
  //*place it in constructor as private attribute
  constructor(private _httpService: HttpService) {} 
}
