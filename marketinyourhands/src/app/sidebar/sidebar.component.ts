import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { Menu } from "../Models/menu.model";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class SideBarComponent implements OnInit {
  constructor() {}
  categories: Menu[] = [];
  menuItems: Menu[] = [];
  ngOnInit(): void {
    this.initLookup();
  }

  closeSidebar() {
    document.getElementById("mhSidebar").classList.remove("show");
  }

  private initLookup() {
    this.categories = [
      {
        id: 1,
        value: "Bread",
        icon: "fas fa-bread-slice fa-fw",
        submenu: [
          { id: 101, value: "bread" },
          { id: 102, value: "bagels" },
          { id: 103, value: "Pita & Flatbread" },
        ],
      },
      {
        id: 2,
        value: "Fruits and Vegetables",
        icon: "fas fa-apple-alt fa-fw",
        submenu: [
          { id: 201, value: "Fruits" },
          { id: 202, value: "Vegetables" },
          { id: 203, value: "Mushrooms" },
        ],
      },
      {
        id: 3,
        value: "Diary and Eggs",
        icon: "fas fa-cheese fa-fw",
        submenu: [
          { id: 301, value: "Milk" },
          { id: 302, value: "Cheese" },
          { id: 303, value: "Eggs" },
        ],
      },
    ];

    this.menuItems = [
      {
        id: 1,
        value: "Shop",
        submenu: [
          { id: 101, value: "Marketplace" },
          { id: 102, value: "Grocery Store" },
          { id: 103, value: "Food Delivery" },
        ],
      },
      {
        id: 2,
        value: "Account",
        submenu: [
          { id: 201, value: "User Account" },
          { id: 202, value: "Sign In / Sign Up" },
          { id: 203, value: "Password Recovery" },
        ],
      },
    ];
  }
}
