import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { TransportService } from '../services/transport.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css']
})
export class TransportComponent implements OnInit {

  private query = {
    from: "CDG",
    to: "SXB",
    singleDate: "2016-12-07",
    return: false,
    returnDate: null,
    flexible: 5
  };
  private browseResults = [];
  private results = {};
  private flights = [];
  private isLoading = true;

  private flight = {};
  private isEditing = false;

  private addtsatForm: FormGroup;
  private name = new FormControl("", Validators.required);
  private age = new FormControl("", Validators.required);
  private weight = new FormControl("", Validators.required);

  private infoMsg = { body: "", type: "info"};

  date: Date = new Date();

  constructor(private http: Http,
              private transportService: TransportService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getFlights(this.query);
    this.browseFlights(this.query);
    console.log(this.flights);
  }

  getFlights(query) {
    this.transportService.getFlights(this.query).subscribe(
      data => this.results = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  browseFlights(query) {
    this.transportService.browseFlights(this.query).subscribe(
      data => this.browseResults = data,
      error => console.log(error)
    );
    console.log(this.flights)
  }

}
