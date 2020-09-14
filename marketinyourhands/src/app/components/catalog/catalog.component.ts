import { ViewEncapsulation, Component, OnInit } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { MenuItem } from "primeng/api";

@Component({
  selector: "app-catalog",
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CatalogComponent implements OnInit {
  products: Product[] = [];
  items: MenuItem[];
  home: MenuItem;

  ngOnInit(): void {
    this.items = [{ label: "Product catalog" }];

    this.home = {
      icon: "pi pi-home",
      routerLink: "/",
      styleClass: "active-breadcrumb",
    };
    this.initProducts();
  }
  private initProducts() {
    this.products = [
      {
        name: "Coconut, Indonesia",
        price: 100,
        image: "product01.jpg",
      },
      {
        name: "Soft Creme Cheese",
        price: 200,
        image: "product02.jpg",
      },
      {
        name: "Pepsi Soda Can",
        price: 50,
        image: "product03.jpg",
      },
      {
        name: "Fresh Orange",
        price: 50,
        image: "product04.jpg",
      },
      {
        name: "Moisture Body Lotion",
        price: 50,
        image: "product05.jpg",
      },
      {
        name: "Nut Chocolate Paste",
        price: 50,
        image: "product06.jpg",
      },
      {
        name: "Mozzarella Mini Cheese",
        price: 50,
        image: "product07.jpg",
      },
      {
        name: "Mozarella Cheese",
        price: 100,
        image: "bestseller08.jpg",
      },
      {
        name: "Men's Shampoo",
        price: 175,
        image: "bestseller09.jpg",
      },
      {
        name: "Frozen Oven-Ready Poultry",
        price: 200,
        image: "bestseller10.jpg",
      },
      {
        name: "Dark Chocolate with Nuts",
        price: 125,
        image: "bestseller11.jpg",
      },
      {
        name: "Corn Oil Bottle",
        price: 150,
        image: "bestseller12.jpg",
      },
      {
        name: "Steak Salmon Fillet",
        price: 150,
        image: "bestseller13.jpg",
      },
      {
        name: "Sardine in Tomato Sauce",
        price: 150,
        image: "bestseller14.jpg",
      },
    ];
  }
}
