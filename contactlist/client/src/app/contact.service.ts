import { Injectable } from "@angular/core";
import { HttpParams, HttpClient } from "@angular/common/http";
import { Contact } from "./contact";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { identifierModuleUrl } from "@angular/compiler";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor(private httpClient: HttpClient) {}

  // retrieving contacts
  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>("/.netlify/functions/api/contacts");
  }

  // add contact method
  addContact(newContact) {
    return this.httpClient
      .post("/.netlify/functions/api/contact", newContact, {
        responseType: "json",
        observe: "response",
      })
      .pipe(map((response) => response.body));
  }

  // delete contact method
  deleteContact(id) {
    return this.httpClient
      .delete("/.netlify/functions/api/contact/" + id, {
        responseType: "json",
        observe: "response",
      })
      .pipe(map((response) => response.body));
  }
}
