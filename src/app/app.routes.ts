import { Routes } from '@angular/router';
import { customersroutes } from './admin/components/customers/customers.routes';
import { productsroutes } from './admin/components/products/products.routes';
import { ordersroutes } from './admin/components/orders/orders.routes';
import { HomeComponent } from './ui/components/home/home.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { dashboardroutes } from './admin/components/dashboard/dashboard.routes';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { homeRoutes } from './ui/components/home/home.routes';
import { basketUiRoutes } from './ui/components/basket/basket.routes';
import { productsUiRoutes } from './ui/components/products/products.routes';
import { BasketComponent } from './ui/components/basket/basket.component';

export const routes: Routes = [
  {path:"admin",component:LayoutComponent, children:[
    {path:"", component:DashboardComponent},
    {path:"customers", loadChildren:() => import("./admin/components/customers/customers.routes").then(c =>c.customersroutes)},
    {path:"products", loadChildren:() => import("./admin/components/products/products.routes").then(p => p.productsroutes)},
    {path:"orders", loadChildren:() => import("./admin/components//orders/orders.routes").then(o =>o.ordersroutes)},

  ]
  },
  {path:"", component:HomeComponent},
  {path:"basket", loadChildren:() => import("./ui/components/basket/basket.routes").then(b => b.basketUiRoutes)},
  {path:"products", loadChildren:() => import("./ui/components/products/products.routes").then(p=> p.productsUiRoutes)},
];
