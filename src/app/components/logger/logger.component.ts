import { Component, OnInit } from '@angular/core';
import { FuelStop } from '../../types/FuelStop';
import { Store } from '../../Store';
import { FuelLog } from '../../types/FuelLog';
import { UserDataStore } from '../../datastore/UserDataStore';
import { UserDataStoreOpts } from '../../datastore/UserDataStoreOpts';
import * as ons from 'onsenui';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {

  private fuelLog: FuelLog;
  private newFuelStop: FuelStop;
  private store: Store<UserDataStore>;
  private fuelEconomy: number

  constructor() {
    this.store = new Store<UserDataStore>(new UserDataStoreOpts());
    this.fuelLog = new FuelLog(this.store.get('fuelLog'));
    this.newStop();
  }

  ngOnInit(){
    this.renderEconomy();
  }
  
  alert() {
    ons.notification.alert('Hello, world!');
  }

  renderEconomy(){
    if(this.fuelLog.fuelStops.length > 1) {
      this.fuelEconomy = this.calculatedEconomy(this.fuelLog.fuelStops);
      console.log('Economy calculated as ' + this.fuelEconomy);
    } else {
      this.fuelEconomy = null;
    }
  }

  /**
   * @param fuelStops Ordered list with most recent fuel stop at index 0
   */
  calculatedEconomy(fuelStops: FuelStop[]){

    fuelStops.forEach((stop) => console.log(stop.fuel + " milieage: " + stop.mileage));

    let totalDistance = fuelStops[0].mileage - fuelStops[fuelStops.length - 1].mileage;
    let totalFuel = fuelStops
      .reduce((sum, curr) => sum + Number(curr.fuel), 0) 
      - Number(fuelStops[fuelStops.length - 1].fuel); //take away first entry of fuel
    let gallons = totalFuel * 0.22; //litres -> gallons
    return totalDistance / gallons;
    
  }

  addStop() {
    this.fuelLog.AddFuelStop(this.newFuelStop);
    this.store.set('fuelLog', this.fuelLog);
    this.newStop();
  }

  newStop() {
    if(this.fuelLog.GetLastFuelStop() == null){
      this.newFuelStop = new FuelStop();
    } else {
      this.newFuelStop = new FuelStop(this.fuelLog.GetLastFuelStop());
    }
    this.renderEconomy();
  }

  removeStop(fuelStop: FuelStop) {
    this.fuelLog.RemoveFuelStop(fuelStop);
    this.store.set('fuelLog', this.fuelLog);
    this.renderEconomy();
  }
}
