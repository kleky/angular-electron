import { Component, OnInit } from '@angular/core';
import { FuelStop } from '../../Types/FuelStop';
import { Store } from '../../Store';
import { FuelLog } from '../../Types/FuelLog';
import { UserData } from '../../DataStore/UserData';
import { UserDataStoreOpts } from '../../DataStore/UserDataStoreOpts';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.scss']
})
export class LoggerComponent implements OnInit {

  public fuelLog: FuelLog;
  public newFuelStop: FuelStop;
  private store: Store<UserData>;

  constructor() {
    this.store = new Store<UserData>(new UserDataStoreOpts());
    this.fuelLog = new FuelLog(this.store.get('fuelLog'));
    this.newStop();
  }

  ngOnInit() {
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
