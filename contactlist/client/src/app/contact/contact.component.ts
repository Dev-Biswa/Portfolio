import { Component, OnInit } from "@angular/core";
import { Contact } from "../contact";
import { ContactService } from "../contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  constructor(private contactService: ContactService) {}
  contacts: Contact[];
  conatct: Contact;
  first_name: string;
  last_name: string;
  phone: string;

  ngOnInit() {
    this.getContacts();
  }

  getContacts() {
    this.contactService
      .getContacts()
      .subscribe((data) => (this.contacts = data));
  }

  deleteContact(id) {
    this.contactService.deleteContact(id).subscribe((data) => {
      if (data) {
        this.getContacts();
      }
    });
  }

  addContact() {
    const newContact = {
      first_name: this.first_name,
      last_name: this.last_name,
      phone: this.phone,
    } as Contact;

    this.contactService.addContact(newContact).subscribe((data) => {
      if (data) {
        this.getContacts();
      }
    });
  }
}
