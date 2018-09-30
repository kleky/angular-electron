import {FuelStop} from './FuelStop';

export class FuelLog {

  constructor(fuelLog: FuelLog = null) {
    this.fuelStops = fuelLog !== null ? fuelLog.fuelStops : [];
  }
  public fuelStops: FuelStop[];

  public AddFuelStop(fuelStop: FuelStop) {
    this.fuelStops.push(fuelStop);
  }

}
