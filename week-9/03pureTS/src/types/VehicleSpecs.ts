import FuelType from "../enums/FuleType";
import VehicleType from "../enums/VehicleType";

type VehicleSpecs = {
  make: string;
  model: string;
  year: number;
  fuelType: FuelType;
  type: VehicleType;
};

export default VehicleSpecs;
