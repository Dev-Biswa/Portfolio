import { Component, ViewEncapsulation, OnInit, Input } from "@angular/core";
import { Product } from "src/app/Models/product.model";
import { eInventoryStatus } from "src/app/Enums/eInventoryStatus";

@Component({
  selector: "app-product-slide",
  templateUrl: "./product-slide.component.html",
  styleUrls: ["./product-slide.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class ProductSlideComponent implements OnInit {
  responsiveOptions: any[];
  products: Product[] = [];
  eInventoryStatus = eInventoryStatus;

  @Input() heading: string = "";

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: "1024px",
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: "768px",
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ];
    this.getProducts();
  }
  private getProducts(): void {
    this.products = [
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
  }
}
