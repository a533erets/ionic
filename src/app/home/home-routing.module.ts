import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
      },
      {
        path: 'orders',
        loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
      },
      {
        path: 'setting',
        loadChildren: () => import('./setting/setting.module').then( m => m.SettingPageModule)
      }
    ]
  }
];
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
