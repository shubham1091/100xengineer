import Entity from "../abstract/Entity";
import Reportable from "../interfaces/Reportable";
import Coordinates from "../types/Coordinates";
import Logger from "../utils/Logger";

class Road extends Entity implements Reportable{
  constructor(
    id: symbol,
    public name: string,
    public start: Coordinates,
    public end: Coordinates
  ) {
    super(id);
  }

  generateReport(): string {
    const report = `Road ${this.name} from (${this.start.x}, ${this.start.y}) to (${this.end.x}, ${this.end.y})`;
    // Logger.log(report);
    return report;
  }
}

export default Road;
