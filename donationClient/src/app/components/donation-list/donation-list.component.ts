import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Donation } from 'src/app/donation';
import { DonationService } from 'src/app/service/donation.service';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.css']
})
export class DonationListComponent implements OnInit {

  private donations:Donation[];

  constructor(private _service:DonationService, private _router:Router) { }

  ngOnInit() {
    this._service.getDonations().subscribe((res:any[])=> {
      console.log(res);
      this.donations=res;
    })
  }

  deleteDonation(donation) {
    this._service.deleteDonation(donation.id).subscribe((data)=> {
      this.donations.splice(this.donations.indexOf(donation),1);
    }, (error)=> {
      console.log(error);
    });
  }

  updateDonation(donation) {
    this._service.setter(donation);
    this._router.navigate(['/form']);
  }

  createDonation() {
    let donation = new Donation();
    this._service.setter(donation);
    this._router.navigate(['/form']);
  }






}
