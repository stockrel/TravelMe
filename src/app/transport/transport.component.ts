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
    returnDate: null
  };
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
    this.getFlights("CDG","LHR","2016-12-07",false,null);
    console.log(this.flights)
  }

  getFlights(from,to,singleDate,withReturn,returnDate) {
    this.transportService.getFlights(this.query).subscribe(
      data => this.results = data,
      error => console.log(error),
      () => this.isLoading = false
    );
    console.log(this.flights)
  }

}
