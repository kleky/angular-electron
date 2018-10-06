import {UserDataStore} from './UserDataStore';
import {FuelLog} from '../types/FuelLog';
import {MOCKFUELSTOPS} from '../mocks/MockFuelStops';
import {IDataStoreOptions} from './IDataStoreOptions';
import {Injectable} from '@angular/core';

export class UserDataStoreOpts implements IDataStoreOptions<UserDataStore> {
  type = 'UserDataStore';
  path: string;
  defaults: UserDataStore;

  constructor() {
    this.defaults = new UserDataStore();
  }
}
