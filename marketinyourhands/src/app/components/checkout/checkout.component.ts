import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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

  ngOnInit(): void {
    this.items = [{ label: "Checkout" }];

    this.home = { icon: "pi pi-home", routerLink: "/" };
    this.formInit();
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
}
