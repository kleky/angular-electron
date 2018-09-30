import { Component, OnInit } from '@angular/core';
import { FuelStop } from '../../Types/FuelStop';
import { Store } from '../../Store';
import { FuelLog } from '../../Types/FuelLog';
import { UserDataStore } from '../../DataStore/UserDataStore';
import { UserDataStoreOpts } from '../../DataStore/UserDataStoreOpts';

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
    this.newFuelStop = new FuelStop();
  }

  ngOnInit() {
  }

  addStop() {
    this.fuelLog.AddFuelStop(this.newFuelStop);
    this.store.set('fuelLog', this.fuelLog);
  }
}
