import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router' ;
import { Certif } from '../certif.model';
import {FormGroup, FormControl ,Validators, FormArray, NgForm } from '@angular/forms'
import { Observable } from 'rxjs';


@Component({
  selector: 'app-certif-forms',
  templateUrl: './certif-forms.component.html',
  styleUrls: ['./certif-forms.component.css']
})
export class CertifFormsComponent implements OnInit {

  CertifForm: FormGroup ;
  url;

  constructor() { }

  ngOnInit() {
    this.CertifForm= new FormGroup({
      'certif_general_info' : new FormGroup({
        'name' : new FormControl (null,[Validators.required]),
        'Description' : new FormControl (null, Validators.required),
        'Purpose' : new FormControl (null, Validators.required),
        'imagePath' : new FormControl(null , Validators.required ),
        'Chapters' : new FormControl(null , Validators.required)
      }),
      'cerif_our_info' : new FormGroup ({
        'sections' : new FormArray([]),
        'rating' : new FormControl(),
        'Related_Certif' : new FormArray([]),
      })
    });

    //this.CertifForm.valueChanges.subscribe((status) => console.log(status));
  }

  /**onSubmit(){
    console.log(this.onSubmit);
  }**/

  onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = reader.result;
      }
    }
  }

  onSubmit(){
    console.log(this.CertifForm.value);
  }

  

}
