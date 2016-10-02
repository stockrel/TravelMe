import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class TransportService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getFlights(body) {
    return this.http.post("http://localhost:3001/flights/search/skyscanner", JSON.stringify(body), this.options).map(res => res.json());
  }

  // addCat(cat) {
  //   return this.http.post("/cat", JSON.stringify(cat), this.options);
  // }

  // editCat(cat) {
  //   return this.http.put(`/cat/${cat._id}`, JSON.stringify(cat), this.options);
  // }

  // deleteCat(cat) {
  //   return this.http.delete(`/cat/${cat._id}`, this.options);
  // }
  
}
