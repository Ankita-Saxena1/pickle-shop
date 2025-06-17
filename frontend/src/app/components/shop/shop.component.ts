import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Router } from "@angular/router";
import { collection, addDoc, getDocs, DocumentData } from "firebase/firestore";
import { db } from "src/config/firebaseconfig"; // Adjust the import path as necessary
import { Product } from "src/app/models/product.model";
import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-shop",
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.css"],
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  showForm = false;
  newProduct: Product = {
    name: "",
    weight: null,
    unit: "",
    imageUrl: [],
    category: [],
    description: "",
    price: null,
    currency: "",
    isAvailable: true,
    fiber: null,
    sugar: null,
    sodium: null,
  }; // Initialize with default values

  constructor(private router: Router) {}

  async ngOnInit(): Promise<void> {
    // Use async as getDocs is asynchronous
    try {
      const querySnapshot = await getDocs(collection(db, "products")); // Replace 'products' with your collection name
      this.products = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Product; // Cast data to Product interface
        return {
          id: doc.id, // Use doc.id for the document ID
          ...data,
        };
      });
      console.log("Products fetched from Firestore:", this.products);
    } catch (error) {
      console.error("Error fetching products from Firestore:", error);
      // Handle error (e.g., display an error message to the user)
    }
  }

  goToProduct(productId: string) {
    // Use string for product ID
    this.router.navigate(["/product", productId]);
  }

  async submitProduct() {
    // Add your logic to save the product to your collection/database here

    try {
      const docRef = await addDoc(
        collection(db, "products"),
        this.newProduct
      );
      console.log("Document written with ID: ", docRef.id);

      // Optional: Provide feedback to the user
      alert("Data added successfully!");
      this.showForm = false;
      // Optionally reset the form
      this.newProduct = {
        name: "",
        weight: null,
        unit: "",
        imageUrl: [],
        category: [],
        description: "",
        price: null,
        currency: "",
        isAvailable: true,
        fiber: null,
        sugar: null,
        sodium: null,
      };
      this.ngOnInit();
    } catch (e: any) {
      console.error("Error adding document: ", e);
      alert("Error adding data: " + e.message);
    }
  }
}
