import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Donation } from '../donation';

let headers = new HttpHeaders().set('Content-Type','application/json');
let options ={
  headers:headers
}

@Injectable({
  providedIn: 'root'
})
export class DonationService {
  private baseUrl:string='http://localhost:8400/api';
  private donation = new Donation();

  constructor(private _http:HttpClient) { }

  getDonations() {
    return this._http.get(this.baseUrl+'/donations',options)
  }

  getDonation(id:Number) {
    return this._http.get(this.baseUrl+'/donation/'+id,options)
  }

  deleteDonation(id:Number) {
    return this._http.delete(this.baseUrl+'/donation/'+id,options);
  }

  createDonation(donation:Donation) {
    return this._http.post(this.baseUrl+'/donation',JSON.stringify(donation),options);
  }

  updateDonation(donation:Donation) {
    return this._http.put(this.baseUrl+'/donation',JSON.stringify(donation),options);
  }

  setter(donation:Donation) {
    this.donation=donation;
  }

  getter() {
    return this.donation;
  }
}
