import Entity from "../abstract/Entity";
import Coordinates from "../types/Coordinates";
import Logger from "../utils/Logger";

class Animal extends Entity {
  constructor(
    id: symbol,
    public species: string,
    public position: Coordinates
  ) {
    super(id);
  }

  move(newPosition: Coordinates): void {
    this.position = newPosition;
    // Logger.log(
    //   `${this.species} moved to (${this.position.x}, ${this.position.y})`
    // );
  }
}

export default Animal;
