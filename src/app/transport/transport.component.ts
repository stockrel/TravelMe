import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import * as spinner from 'ng2-spin-kit/app/spinners';

import { TransportService } from '../services/transport.service';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.css'],
  directives: [
    spinner.RotatingPlaneComponent,
    spinner.DoubleBounceComponent,
    spinner.WaveComponent,
    spinner.WanderingCubesComponent,
    spinner.PulseComponent,
    spinner.ChasingDotsComponent,
    spinner.CircleComponent,
    spinner.ThreeBounceComponent,
    spinner.CubeGridComponent,
    spinner.WordPressComponent,
    spinner.FadingCircleComponent,
    spinner.FoldingCubeComponent
  ]
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
  private init = false;
  private searching = false;

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
    this.init = false;
    this.isLoading = false;
  }

  getFlights(query) {
    this.results.flights = [];
    this.transportService.getFlights(this.query).subscribe(
      data => this.results = data,
      error => console.log(error),
      () => {
        console.log("after getFlights")
        console.log("found "+this.results.flights.length+" flights")
        this.isLoading = false;
        this.searching = false;
      }
    );
  }
  browseFlights(query) {
    this.transportService.browseFlights(this.query).subscribe(
      data => this.browseResults = data,
      error => console.log(error),
      () => {
        console.log("after browseFlights")
        console.log("found "+this.browseResults.length+" browses")
      }
    );
    console.log(this.flights)
  }
  search(){
    this.init = true;
    console.log("calling search")
    console.log(this.query)
    this.searching = true;
    this.getFlights(this.query);
    this.browseFlights(this.query);
  }
  switchDate(newDate){
    console.log("switching dates")
    this.query.singleDate = newDate;
    console.log(this.query)
    this.getFlights(this.query);
    this.browseFlights(this.query);
  }

}
