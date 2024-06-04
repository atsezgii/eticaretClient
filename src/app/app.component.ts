import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './ui/components/products/products.component';
import { HomeComponent } from './ui/components/home/home.component';
import { BasketComponent } from './ui/components/basket/basket.component';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProductsComponent,
    HomeComponent,
    BasketComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eticaretClient';
 constructor(private toastr:ToastrService){
  this.toastr.success("jhfksjdjfkjd","kdjsfksdjfkfj");
 }
}
