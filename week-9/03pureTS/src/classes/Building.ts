import Building from "../abstract/Building";
import BuildingType from "../enums/BuildingType";
import Reportable from "../interfaces/Reportable";
import Coordinates from "../types/Coordinates";
import Logger from "../utils/Logger";

class ResidentialBuilding extends Building implements Reportable {
  constructor(id: symbol, position: Coordinates) {
    super(id, BuildingType.Residential, position);
  }

  generateReport(): string {
    const report = `Residential Building at (${this.position.x}, ${this.position.y})`;
    // Logger.log(report);
    return report;
  }
}

export default ResidentialBuilding;
