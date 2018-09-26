import { Component, OnInit } from '@angular/core';
import { FuelStop } from '../../Types/FuelStop';
import {FUELSTOPS} from '../../Mocks/MockFuelStops';
import {Store} from '../../Store';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {

  private fuelStops: FuelStop[];
  private newFuelStop: FuelStop;
  private store: Store;

  constructor() {
    this.store = new Store({
      // We'll call our data file 'user-preferences'
      configName: Store.FUEL_STOPS,
      defaults: FUELSTOPS
    });
    this.fuelStops = this.store.getData();
    this.newFuelStop = new FuelStop();
  }

  ngOnInit() {
  }

  addStop() {
    this.fuelStops.push(this.newFuelStop);
    this.store.setData(this.fuelStops);
  }
}
