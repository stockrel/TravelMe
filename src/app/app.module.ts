import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DataService } from './services/data.service';
import { GoogleflightsService } from './services/googleflights.service';
import { TransportService } from './services/transport.service';

import { AlertModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ActivitiesComponent } from './activities/activities.component';
import { AccomodationsComponent } from './accomodations/accomodations.component';
import { TransportComponent } from './transport/transport.component';


const routing = RouterModule.forRoot([
    { path: '',      component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'transport', component: TransportComponent },
    { path: 'accomodations', component: AccomodationsComponent }
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ActivitiesComponent,
    AccomodationsComponent,
    TransportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing,
    AlertModule,
    DatepickerModule
  ],
  providers: [
    DataService,
    GoogleflightsService,
    TransportService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }
