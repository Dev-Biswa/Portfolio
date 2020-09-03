import { Component, ViewEncapsulation, OnInit } from "@angular/core";
import { CategoryLu } from "../Models/categoryLu.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  constructor() {}
  categoryOptions: CategoryLu[] = [];
  selectedCategory: number;
  displayDialog: boolean;

  ngOnInit(): void {
    this.initLookup();
    this.selectedCategory = 1;
  }

  toggleNavigation() {
    document.getElementById("mhSidebar").classList.add("show");
  }

  private initLookup(): void {
    this.categoryOptions = [
      { value: 1, label: "All Categories" },
      { value: 2, label: "Bakery" },
      { value: 3, label: "Fruit and Vegetables" },
      { value: 4, label: "Diary and Eggs" },
      { value: 5, label: "Meat and Poultry" },
    ];
  }

  openSignUpDialog() {
    this.displayDialog = true;
  }

  displayChangeHandler(event) {
    this.displayDialog = event;
  }
}
