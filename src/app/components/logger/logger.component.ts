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

  public fuelLog: FuelLog;
  public newFuelStop: FuelStop;
  private store: Store<UserDataStore>;

  constructor() {
    this.store = new Store<UserDataStore>(new UserDataStoreOpts());
    this.fuelLog = new FuelLog(this.store.get('fuelLog'));
    this.newStop();
  }

  alert() {
    ons.notification.alert('Hello, world!');
  }
  ngOnInit() {
    
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
    
  }
}
