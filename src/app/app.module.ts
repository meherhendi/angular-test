import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificationComponent } from './certification/certification.component';
import { CertifDetailsComponent } from './certification/certif-details/certif-details.component';
import { CertifFormsComponent } from './certification/certif-forms/certif-forms.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ImageUrlComponent } from './certification/certif-forms/image-url/image-url.component';


@NgModule({
  declarations: [
    AppComponent,
    CertificationComponent,
    
    CertifDetailsComponent,
    
    CertifFormsComponent,
    
    ImageUrlComponent ,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
