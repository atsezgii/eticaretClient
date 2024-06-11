import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientService } from '../../../../services/common/http-client.service';
import { Create_Product } from '../../../../contracts/Create_Product';
import { ProductService } from '../../../../services/common/models/product.service';
import { BaseComponent, SpinnerType } from '../../../../shared/base.component';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent extends BaseComponent {
  constructor(
  spinner:NgxSpinnerService,
  private productService:ProductService,
  private alertify:AlertifyService){
  super(spinner);
}

create(name:HTMLInputElement,stock:HTMLInputElement,price:HTMLInputElement) {
  this.showSpinner(SpinnerType.BallScaleMultiple);
  const create_product : Create_Product = new Create_Product();
  create_product.name = name.value;
  create_product.stock = parseInt(stock.value);
  create_product.price = parseFloat(price.value);

  this.productService.create(create_product, ()=>{
    this.hideSpinner(SpinnerType.BallScaleMultiple);
    this.alertify.message("Ürün Başarıyla eklenmiştir", {
      dismissOthers: true,
      messageType : MessageType.Success,
      position: Position.TopRight
    });
},errorMessage=>{ this.alertify.message(errorMessage,{
  dismissOthers: true,
  messageType:MessageType.Error,
  position:Position.TopRight
});
});
}
}
