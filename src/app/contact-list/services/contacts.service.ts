import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }


  getAllContacts(){
    return this.http.get("../../../assets/contacts.json")
  }

  getRecents(){
    return this.http.get("../../../assets/recent-contact.json")
  }

}
