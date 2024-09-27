import Person from "./Person";
import Vehicle from "./Vehicle";
import Building from "./Building";
import Animal from "./Animal";
import Company from "./Company";
import Government from "./Government";
import Road from "./Road";
import TrafficLight from "./TrafficLight";
import Logger from "../utils/Logger";
import Reportable from "../interfaces/Reportable";
import RandomGenerator from "../utils/RandomGenerator";
import TrafficLightState from "../enums/TrafficLightState";

class City implements Reportable {
  private people: Map<symbol, Person> = new Map();
  private vehicles: Map<symbol, Vehicle> = new Map();
  private buildings: Map<symbol, Building> = new Map();
  private animals: Map<symbol, Animal> = new Map();
  private companies: Map<symbol, Company> = new Map();
  private governments: Map<symbol, Government> = new Map();
  private roads: Map<symbol, Road> = new Map();
  private trafficLights: Map<symbol, TrafficLight> = new Map();

  constructor(public name: string) {}

  addBuilding(building: Building): void {
    this.buildings.set(building.id, building);
    Logger.log(`Building of type ${building.type} added to the city`);
  }

  addVehicle(vehicle: Vehicle): void {
    this.vehicles.set(vehicle.id, vehicle);
    Logger.log(`Vehicle ${vehicle.specs.make} ${vehicle.specs.model} added to the city`);
  }

  addPerson(person: Person): void {
    this.people.set(person.id, person);
    Logger.log(`Person ${person.details.name} added to the city`);
  }

  addAnimal(animal: Animal): void {
    this.animals.set(animal.id, animal);
    Logger.log(`Animal ${animal.species} added to the city`);
  }

  addCompany(company: Company): void {
    this.companies.set(company.id, company);
    Logger.log(`Company ${company.name} added to the city`);
  }

  addGovernment(government: Government): void {
    this.governments.set(government.id, government);
    Logger.log(`Government ${government.name} added to the city`);
  }

  addRoad(road: Road): void {
    this.roads.set(road.id, road);
    Logger.log(`Road ${road.name} added to the city`);
  }

  addTrafficLight(trafficLight: TrafficLight): void {
    this.trafficLights.set(trafficLight.id, trafficLight);
    Logger.log(`Traffic light added to the city`);
  }

  simulate(time: number): void {
    Logger.log(`Starting city simulation for ${time} units of time...`);
    // Simulate city activities
    for (let t = 0; t < time; t++) {
        this.people.forEach((person) => {
            const newX = person.position.x + RandomGenerator.randomInt(-1, 1);
            const newY = person.position.y + RandomGenerator.randomInt(-1, 1);
            person.move({ x: newX, y: newY });
        });

        this.vehicles.forEach((vehicle) => {
            vehicle.drive();
        });

        this.animals.forEach((animal) => {
            const newX = animal.position.x + RandomGenerator.randomInt(-1, 1);
            const newY = animal.position.y + RandomGenerator.randomInt(-1, 1);
            animal.move({ x: newX, y: newY });
        });

        this.trafficLights.forEach((trafficLight) => {
            const states = [TrafficLightState.Red, TrafficLightState.Yellow, TrafficLightState.Green];
            const newState = RandomGenerator.randomChoice(states);
            trafficLight.changeState(newState);
        });
    }
    Logger.log("City simulation completed.");
  }

  generateReport(): string {
    let report = "City Report:\n";
    report += `Total People: ${this.people.size}\n`;
    report += `Total Vehicles: ${this.vehicles.size}\n`;
    report += `Total Buildings: ${this.buildings.size}\n`;
    report += `Total Animals: ${this.animals.size}\n`;
    report += `Total Companies: ${this.companies.size}\n`;
    report += `Total Governments: ${this.governments.size}\n`;
    report += `Total Roads: ${this.roads.size}\n`;
    report += `Total Traffic Lights: ${this.trafficLights.size}\n`;

    this.buildings.forEach((building) => {
      report += building.generateReport() + "\n";
    });
    this.roads.forEach((road) => {
      report += road.generateReport() + "\n";
    });
    this.trafficLights.forEach((trafficLight) => {
      report += `Traffic Light State: ${trafficLight.getState()}\n`;
    });

    // Logger.log(report);
    return report;
  }
}

export default City;
