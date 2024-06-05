import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './ui/components/products/products.component';
import { HomeComponent } from './ui/components/home/home.component';
import { BasketComponent } from './ui/components/basket/basket.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastPosition, ToastrMessageType } from './services/ui/custom-toastr.service';
import { NgxSpinner, NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProductsComponent,
    HomeComponent,
    BasketComponent,
    NgxSpinnerComponent
  ],

  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eticaretClient';
 constructor(private toastrService:CustomToastrService){
  // toastrService.message("Merhaba","Ezgi",ToastrMessageType.Warning, 2000, ToastPosition.BottomCenter)
 }
}
