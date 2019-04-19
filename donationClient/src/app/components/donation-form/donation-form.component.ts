import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/donation';
import { DonationService } from 'src/app/service/donation.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.css']
})
export class DonationFormComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('',Validators.required),
    numb: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    amount: new FormControl('',Validators.required)
  })
    private donation:Donation;

  constructor(private _service:DonationService, private _router:Router) { }

  ngOnInit() {
    this.donation = this._service.getter();
  }

  processForm() {
    if (this.donation.id == undefined) {
      this._service.createDonation(this.donation).subscribe((donation) => {
        this._router.navigate(['/list']);
      }, (error) => {
        console.log(error);
      });
    } else {
      this._service.updateDonation(this.donation).subscribe((donation) => {
        this._router.navigate(['/list']);
      }, (error) => {
        console.log(error);
      });
    }
  }

}
