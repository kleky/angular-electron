import {FuelLog} from '../Types/FuelLog';
import {IDataStore} from './IDataStore';

export class UserData implements IDataStore {
  public Version = 0.3;
  public fuelLog: FuelLog;

  constructor() {
    this.fuelLog = new FuelLog();
  }
}
