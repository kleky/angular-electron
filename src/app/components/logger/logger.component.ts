import { Component, OnInit } from '@angular/core';
import { FuelStop } from '../../types/FuelStop';
import { Store } from '../../Store';
import { FuelLog } from '../../types/FuelLog';
import { UserDataStore } from '../../datastore/UserDataStore';
import { UserDataStoreOpts } from '../../datastore/UserDataStoreOpts';

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

  ngOnInit() {
    this.newFuelStop = this.fuelLog.GetLastFuelStop();
  }

  addStop() {
    this.fuelLog.AddFuelStop(this.newFuelStop);
    this.store.set('fuelLog', this.fuelLog);
    this.newStop();
  }

  newStop() {
    this.newFuelStop = new FuelStop();
  }
}
