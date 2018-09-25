import { Component, OnInit } from '@angular/core';
import { FuelStop } from '../../Types/FuelStop';
import {FUELSTOPS} from '../../Mocks/MockFuelStops';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {

  fuelStops: FuelStop[];
  newFuelStop: FuelStop;

  constructor() {
    this.fuelStops = FUELSTOPS;
    this.newFuelStop = new FuelStop();
  }

  ngOnInit() {
  }

  addStop() {
    this.fuelStops.push(this.newFuelStop);
  }
}
