import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  weight: string;
  price: number;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<Product[]>('http://localhost:8080/api/products')
      .subscribe(data => this.products = data);
  }

  goToProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}