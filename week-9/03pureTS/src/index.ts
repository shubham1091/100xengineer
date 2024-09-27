import Simulation from "./classes/Simulation";

const simulation = new Simulation();
simulation.initialize();
simulation.simulate(10);
const report = simulation.generateReport();
console.log(report);
