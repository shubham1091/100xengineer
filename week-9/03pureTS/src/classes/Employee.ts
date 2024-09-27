import Entity from "../abstract/Entity";
import Coordinates from "../types/Coordinates";
import PersonDetails from "../types/PersonDetails";
import Logger from "../utils/Logger";
import Person from "./Person";

class Employee extends Person {
  constructor(
    id: symbol,
    public details: PersonDetails,
    public position: Coordinates,
    public companyId: symbol
  ) {
    super(id, details, position);
  }

  move(newPosition: Coordinates): void {
    this.position = newPosition;
    // Logger.log(
    //   `${this.details.name} moved to (${this.position.x}, ${this.position.y})`
    // );
  }
}

export default Employee;
