import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomersComponent } from '../../../components/customers/customers.component';
import { ProductsComponent } from '../../../components/products/products.component';
import { OrdersComponent } from '../../../components/orders/orders.component';
import { DashboardComponent } from '../../../components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,
    CustomersComponent,
    ProductsComponent,
    OrdersComponent,
    DashboardComponent,
    RouterModule,MatListModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
