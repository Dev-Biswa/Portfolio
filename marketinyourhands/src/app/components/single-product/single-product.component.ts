import { ViewEncapsulation, Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { Product } from "src/app/Models/product.model";
import { eInventoryStatus } from "src/app/Enums/eInventoryStatus";

@Component({
  selector: "app-single-product",
  templateUrl: "./single-product.component.html",
  styleUrls: ["./single-product.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SingleProductComponent implements OnInit {
  items: MenuItem[];

  home: MenuItem;
  images: any[];
  bestSellingProducts: Product[];

  responsiveOptions: any[] = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];

  ngOnInit(): void {
    this.items = [
      {
        label: "Product catalog",
        routerLink: "/miyh/catalog",
        styleClass: "active-breadcrumb",
      },
      { label: "Single product" },
    ];

    this.home = {
      icon: "pi pi-home",
      routerLink: "/",
      styleClass: "active-breadcrumb",
    };

    this.images = [
      {
        previewImageSrc: "../../../assets/gallery/gallery01.jpg",
        thumbnailImageSrc: "../../../assets/gallery/th01.jpg",
      },
      {
        previewImageSrc: "../../../assets/gallery/gallery02.jpg",
        thumbnailImageSrc: "../../../assets/gallery/th02.jpg",
      },
      {
        previewImageSrc: "../../../assets/gallery/gallery03.jpg",
        thumbnailImageSrc: "../../../assets/gallery/th03.jpg",
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
