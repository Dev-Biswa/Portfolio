import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { eInventoryStatus } from "src/app/Enums/eInventoryStatus";
import { Product } from "src/app/Models/product.model";

@Component({
  selector: "app-home-page",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  discountedProducts: Product[];
  bestSellingProducts: Product[];

  ngOnInit(): void {
    this.initProducts();
  }

  private initProducts() {
    this.discountedProducts = [
      {
        name: "Coconut, Indonesia",
        price: 100,
        image: "product01.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Soft Creme Cheese",
        price: 200,
        image: "product02.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Pepsi Soda Can",
        price: 50,
        image: "product03.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Fresh Orange",
        price: 50,
        image: "product04.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Moisture Body Lotion",
        price: 50,
        image: "product05.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Nut Chocolate Paste",
        price: 50,
        image: "product06.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Mozzarella Mini Cheese",
        price: 50,
        image: "product07.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
    ];

    this.bestSellingProducts = [
      {
        name: "Mozarella Cheese",
        price: 100,
        image: "bestseller08.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Men's Shampoo",
        price: 175,
        image: "bestseller09.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Frozen Oven-Ready Poultry",
        price: 200,
        image: "bestseller10.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Dark Chocolate with Nuts",
        price: 125,
        image: "bestseller11.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Corn Oil Bottle",
        price: 150,
        image: "bestseller12.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Steak Salmon Fillet",
        price: 150,
        image: "bestseller13.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
      {
        name: "Sardine in Tomato Sauce",
        price: 150,
        image: "bestseller14.jpg",
        inventoryStatus: eInventoryStatus.InStock,
      },
    ];
  }
}
