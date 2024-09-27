import Entity from "../abstract/Entity";
import Reportable from "../interfaces/Reportable";
import Logger from "../utils/Logger";

class Company extends Entity implements Reportable {
  constructor(id: symbol, public name: string, public industry: string) {
    super(id);
  }

  generateReport(): string {
    const report = `Company ${this.name} in industry ${this.industry}`;
    // Logger.log(report);
    return report;
  }
}

export default Company;
