import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {


  form:FormGroup;
  added:any[]=[];

  constructor(private _formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit() {

    this.form = this._formBuilder.group({
      fName: ['', [Validators.required]],
      lName: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })

  }



  add(){
    if(this.form.valid){
      
      let oldData = JSON.parse(sessionStorage.getItem("data"));
      if(oldData){
        for(var item of oldData){
          this.added.push(item);
        }
      };

      this.added.push({
        fName: this.form.controls['fName'].value,
        lName: this.form.controls['lName'].value,
        phone: this.form.controls['phone'].value,
        email: this.form.controls['email'].value
      })

      sessionStorage.setItem("data", JSON.stringify(this.added));
      
      this.router.navigateByUrl("/");

    }
  }

  cancel(){
    this.router.navigateByUrl("/");
  }
  




}
