import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-pickle-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pickle-list.component.html',
  styleUrls: ['./pickle-list.component.css']
})
export class PickleListComponent implements OnInit {
  pickles: Product[] = [];

  constructor(private productService : ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.pickles = products;
    });
  }
}