import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  newProduct: any;

  constructor(
    private _http: HttpService, 
    private formbuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    ) {
    this.newProduct = this.formbuilder.group({
      title: '',
      price: 0,
      imgUrl: '',
    })
   }

  ngOnInit() {
  }

  onSubmit(formdata){
    console.log(formdata);
    let obs = this._http.createProduct(formdata);
    obs.subscribe(data => {});
    this._router.navigate(['products'])
  }

}
