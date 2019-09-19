import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //Dependency injection**

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  //** then apply HttpClient to constructor
  constructor(private _http: HttpClient) { } 
}
