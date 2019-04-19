import { Component, OnInit } from '@angular/core';
import { Donation } from 'src/app/donation';
import { DonationService } from 'src/app/service/donation.service';

@Component({
  selector: 'app-single-donation',
  templateUrl: './single-donation.component.html',
  styleUrls: ['./single-donation.component.css']
})
export class SingleDonationComponent implements OnInit {

  private donations:Donation[];
  id:number;
  found:boolean;
  constructor(private _service:DonationService) { }

  ngOnInit() {
  }

  onIdKeyUp(event:any) {
    this.id = event.target.value;
    this.found = false;
  }

  viewDonation() {
    this._service.getDonation(this.id).subscribe((res:any[])=>{
      console.log(res);
      this.donations = res;
      this.found = true;
    })
  }

}
