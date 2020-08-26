import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor() {}

  private displaySidebar = new BehaviorSubject<boolean>(true);

  public readonly displaySidebar$ = this.displaySidebar.asObservable();

  public setDisplaySidebar(data: boolean) {
    this.displaySidebar.next(data);
  }

  public getDisplaySidebar() {
    return this.displaySidebar;
  }
}
