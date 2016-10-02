import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class GoogleflightsService {

  private url = "https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyAw6YbY7ww697Q0HKmohcamH1-1q9YE8hY"
  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers});
  private requestObject = {
  "request": {
    "passengers": {
      "kind": "qpxexpress#passengerCounts",
      "adultCount": 1,
      "childCount": 0,
      "infantInLapCount": 0,
      "infantInSeatCount": 0,
      "seniorCount": 0
    },
    "slice": [
      {
        "kind": "qpxexpress#sliceInput",
        "origin": "LYS",
        "destination": "SXB",
        "date": "2016-10-01",
        "maxStops": 0
      }
    ],
    "maxPrice": "EUR500",
    "saleCountry": "FR",
    "ticketingCountry": "FR",
    "refundable": false
  }
}

  constructor(private http: Http) { }

  search(from,to,date) {
  	this.requestObject.request.slice[0].origin = from;
  	this.requestObject.request.slice[0].destination = to;
  	this.requestObject.request.slice[0].date = date;
    return this.http.post(this.url, this.requestObject, this.options).map(res => res.json());
  }

}
