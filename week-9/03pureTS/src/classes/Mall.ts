import Building from "../abstract/Building";
import BuildingType from "../enums/BuildingType";
import Reportable from "../interfaces/Reportable";
import Coordinates from "../types/Coordinates";
import Logger from "../utils/Logger";

class Mall extends Building implements Reportable{
  constructor(id: symbol, position: Coordinates) {
    super(id, BuildingType.Commercial, position);
  }

  generateReport(): string {
    const report = `Mall at (${this.position.x}, ${this.position.y})`;
    // Logger.log(report);
    return report;
  }
}

export default Mall;