import { Component, OnInit } from '@angular/core';
import {  NgxSpinnerService } from 'ngx-spinner';
import { HttpClientService } from '../../../services/common/http-client.service';
import { BaseComponent, SpinnerType } from '../../../shared/base.component';
import { Product } from '../../../contracts/product';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    MatSidenavModule,
    CreateComponent,
    ListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent extends BaseComponent  implements OnInit{
constructor(spinner : NgxSpinnerService, private httpClientService: HttpClientService){
  super(spinner)
}
  ngOnInit(): void {
  this.showSpinner(SpinnerType.BallAtom) ;
   // this.get();
   // this.post();
   //this.put();
   //this.delete()
 }

 get(){
  this.httpClientService.get<Product[]>({
    controller:"products"
  }).subscribe(data=>console.log(data))
 }
 post(){
  this.httpClientService.post({
    controller:"products"
  },
{
  name:"Kalem",
  stock:100,
  price:150
}).subscribe();
 }
 put(){
  this.httpClientService.put({
    controller:"products",
  },{
    id:"EC8A295B-4AAE-497F-C9E5-08DC81B7D7C2",
    name:"test put",
    stock:3415,
    price:252.7
  }).subscribe()
 }
 delete(){
  this.httpClientService.delete({
    controller:"products"
  },"00FB22F2-BEC2-48A4-A91F-38749074772E").subscribe()
 }
}
