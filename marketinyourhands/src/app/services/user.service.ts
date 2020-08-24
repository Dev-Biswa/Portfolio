import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserService {
  constructor(private http: HttpClient) {}

  readonly rootURL = "http://localhost:64991/api";

  //   postUser(user: User) {
  //     return this.http.post(this.rootURL + '/User/CreateUser' , user);
  //   }
}
