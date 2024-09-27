import Entity from "../abstract/Entity";
import Coordinates from "../types/Coordinates";
import PersonDetails from "../types/PersonDetails";
import Logger from "../utils/Logger";

class Person extends Entity {
  constructor(
    id: symbol,
    public details: PersonDetails,
    public position: Coordinates
  ) {
    super(id);
  }

  move(newPosition: Coordinates): void {
    this.position = newPosition;
    // Logger.log(
    //   `${this.details.name} moved to (${this.position.x}, ${this.position.y})`
    // );
  }
}

export default Person;
