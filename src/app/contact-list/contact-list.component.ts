import { ContactsService } from './services/contacts.service';
import { List } from './list.model';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})


export class ContactListComponent implements OnInit {

  contacts: List = new List();
  recents: List = new List();
  added:any[]=[];

  alphabets:String[]=[];
  name:string;



  constructor(private contactList:ContactsService) { }


  ngOnInit() {
    this.contactList.getAllContacts().subscribe(resp=>{
      this.contacts= resp as List;
    })
    
    for(let i=0; i<26; i++){
      let ch = String.fromCharCode(65 + i);
      this.alphabets.push(ch);
    }

    this.contactList.getRecents().subscribe(response=>{
      this.recents= response as List;
    })
    
    this.added = JSON.parse(sessionStorage.getItem("data"));
    
  }

  scrollTo(id){
    let objDiv = document.getElementById(id);
    objDiv.scrollIntoView();
    
  }

  
}
