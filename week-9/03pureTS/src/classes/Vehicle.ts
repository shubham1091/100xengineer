import Entity from "../abstract/Entity";
import Drivable from "../interfaces/Drivable";
import Coordinates from "../types/Coordinates";
import VehicleSpecs from "../types/VehicleSpecs";
import Logger from "../utils/Logger";

class Vehicle extends Entity implements Drivable {
  constructor(
    id: symbol,
    public specs: VehicleSpecs,
    public position: Coordinates
  ) {
    super(id);
  }

  drive(): void {
    this.position.x += 1; // Simple movement logic
    // Logger.log(
    //   `${this.specs.make} ${this.specs.model} moved to (${this.position.x}, ${this.position.y})`
    // );
  }
}

export default Vehicle;
