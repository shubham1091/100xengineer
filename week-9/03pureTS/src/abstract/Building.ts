import Entity from "./Entity";
import Coordinates from "../types/Coordinates";
import BuildingType from "../enums/BuildingType";

abstract class Building extends Entity {
  constructor(
    id: symbol,
    public type: BuildingType,
    public position: Coordinates
  ) {
    super(id);
  }
}

export default Building;
