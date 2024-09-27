import Entity from "../abstract/Entity";
import Reportable from "../interfaces/Reportable";
import Logger from "../utils/Logger";

class Government extends Entity implements Reportable {
  constructor(id: symbol, public name: string, public country: string) {
    super(id);
  }

  generateReport(): string {
    const report = `Government ${this.name} of country ${this.country}`;
    // Logger.log(report);
    return report;
  }
}

export default Government;
