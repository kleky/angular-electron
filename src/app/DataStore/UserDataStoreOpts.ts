import {UserDataStore} from './UserDataStore';
import {FuelLog} from '../Types/FuelLog';
import {MOCKFUELSTOPS} from '../Mocks/MockFuelStops';
import {IDataStoreOptions} from './IDataStoreOptions';
import {Injectable} from '@angular/core';

export class UserDataStoreOpts implements IDataStoreOptions<UserDataStore> {
  type = 'UserData';
  path: string;
  defaults: UserDataStore;

  constructor() {
    this.defaults = new UserDataStore();
  }
}
