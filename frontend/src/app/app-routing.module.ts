// filepath: /Users/ankitasaxena/code-workspace/pickle-shop/frontend/src/app/app-routing.module.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'contact', component: ContactComponent }
];