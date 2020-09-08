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
  eInventoryStatus = eInventoryStatus;

  @Input() heading: string = "";
  @Input() products: Product[] = [];
  @Input() isShowHeader = true;

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
  }
}
