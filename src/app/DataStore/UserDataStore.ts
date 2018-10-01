import {FuelLog} from '../Types/FuelLog';
import {IDataStore} from './IDataStore';

export class UserDataStore implements IDataStore {
  public Version = 0.3;
  public fuelLog: FuelLog;

  constructor() {
    this.fuelLog = new FuelLog();
  }
}
