import { FuelLog } from "../types/FuelLog";

export interface IStore {
  get(key: string);
  set(key: string, value: any);
}
