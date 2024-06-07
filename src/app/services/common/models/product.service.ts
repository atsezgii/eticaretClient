import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Product } from '../../../contracts/Create_Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClientService : HttpClientService){}

  create(product:Create_Product, successCallBack?:any){
    this.httpClientService.post({
      controller:"products"
    },product)
    .subscribe(result => {
      successCallBack();
    })
  }
}