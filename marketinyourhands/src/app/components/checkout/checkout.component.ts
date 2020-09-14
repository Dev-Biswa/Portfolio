import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Product } from "src/app/Models/product.model";

@Component({
  selector: "app-check-out",
  templateUrl: "./checkout.component.html",
  styleUrls: ["./checkout.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class CheckOutComponent implements OnInit {
  constructor(public fb: FormBuilder) {}

  items: MenuItem[];
  home: MenuItem;
  deliveryForm: FormGroup;
  products: Product[] = [];
  ngOnInit(): void {
    this.items = [{ label: "Checkout" }];

    this.home = {
      icon: "pi pi-home",
      routerLink: "/",
      styleClass: "active-breadcrumb",
    };
    this.formInit();
    this.initProducts();
  }

  formInit(): void {
    this.deliveryForm = this.fb.group({
      firstname: ["", Validators.required],
      lastname: [""],
      phone: [""],
      email: [""],
      address: [""],
      ordernote: [""],
      couponcode: [""],
    });
  }

  private initProducts(): void {
    this.products = [
      {
        name: "Frozen Oven-ready Poultry",
        price: 150,
        image: "../../../assets/images/cart-01.jpg",
      },
      {
        name: "TNut Chocolate Paste (750g)",
        price: 300,
        image: "../../../assets/images/cart-02.jpg",
      },
      {
        name: "Mozzarella Mini Cheese",
        price: 250,
        image: "../../../assets/images/cart-03.jpg",
      },
    ];
  }
}
