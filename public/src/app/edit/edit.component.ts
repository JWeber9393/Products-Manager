import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { HttpService } from '../http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  editProduct: any;
  productID: any;

  constructor(
    private _http: HttpService, 
    private formbuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    ) {
    this._route.params.subscribe((params: Params) => {
      this.productID = params.id;
      this._http.oneProduct(params.id).subscribe((product: any) => {
        console.log(product._id);
        this.editProduct = this.formbuilder.group({
          title: product.title,
          price: product.price,
          imgUrl: product.imgUrl
        });
      });
    }); 
  }

  ngOnInit() {
    
  }

  onEdit(formdata) {
    console.log(formdata);
    console.log(this.productID);
    let obs = this._http.editProduct(formdata, this.productID);
    obs.subscribe(data => {
      console.log(data);
      
     });
    this._router.navigate(['/products'])
  }
  onDelete(product: any) {
    let obs = this._http.deleteProduct(product);
    obs.subscribe(data => {
      console.log("*******Deleted product from db", data);
    })
    this._router.navigate(['/products'])
  }

}
