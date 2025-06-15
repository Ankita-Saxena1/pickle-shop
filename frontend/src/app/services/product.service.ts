// frontend/src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsCollection: AngularFirestoreCollection<Product>;

  constructor(private firestore: AngularFirestore) {
    // 'products' is the name of your Firestore collection
    this.productsCollection = this.firestore.collection<Product>('products');
  }

  // Fetch all products
  getProducts(): Observable<Product[]> {
    // valueChanges() returns an Observable of the data
    // idField: 'id' includes the document ID in the returned object
    return this.productsCollection.valueChanges({ idField: 'id' });
  }

  // Fetch a product by ID
  getProduct(id: string): Observable<Product | undefined> {
    // doc(id) gets a reference to a specific document
    // valueChanges() returns an Observable of the document data
    return this.productsCollection.doc<Product>(id).valueChanges({ idField: 'id' });
  }

  // Optional: Add methods for adding, updating, and deleting products
  addProduct(product: Product): Promise<DocumentReference> {
    return this.productsCollection.add(product);
  }

  updateProduct(id: string, product: Partial<Product>): Promise<void> {
    return this.productsCollection.doc(id).update(product);
  }

  deleteProduct(id: string): Promise<void> {
    return this.productsCollection.doc(id).delete();
  }
}
