import {UserData} from './UserData';
import {FuelLog} from '../Types/FuelLog';
import {MOCKFUELSTOPS} from '../Mocks/MockFuelStops';
import {IDataStoreOptions} from './IDataStoreOptions';
import {Injectable} from '@angular/core';

export class UserDataStoreOpts implements IDataStoreOptions<UserData> {
  type = 'UserData';
  path: string;
  defaults: UserData;

  constructor() {
    this.defaults = new UserData();
  }
}
