import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {NewComponent} from './new/new.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';


const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  //need a seperate products without component: in order to link childeren routes
  { path: 'products', children:[
    { path: 'new', component: NewComponent },
    { path: 'edit/:id', component: EditComponent }
  ] },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
