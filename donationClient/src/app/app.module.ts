import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DonationListComponent } from './components/donation-list/donation-list.component';
import { DonationFormComponent } from './components/donation-form/donation-form.component';
import { SingleDonationComponent } from './components/single-donation/single-donation.component';
import { HeaderComponent } from './components/header/header.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { DonationService } from './service/donation.service';
const appRoutes:Routes = [
  {path:'', component:MainpageComponent},
  {path:'single', component:SingleDonationComponent},
  {path:'list', component:DonationListComponent},
  {path:'form', component:DonationFormComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DonationListComponent,
    DonationFormComponent,
    SingleDonationComponent,
    HeaderComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DonationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
