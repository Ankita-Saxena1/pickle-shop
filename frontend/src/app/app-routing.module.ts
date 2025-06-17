import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';  
import { Overview } from './components/about/overview/overview';
import { Team } from './components/about/team/team';
import { About } from './components/about/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'about',
    component: About,
    children: [
      { path: 'overview', component: Overview },
      { path: 'team', component: Team }
    ]
  }
];