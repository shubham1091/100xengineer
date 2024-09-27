import FuelType from "../enums/FuleType";
import TrafficLightState from "../enums/TrafficLightState";
import VehicleType from "../enums/VehicleType";
import PersonDetails from "../types/PersonDetails";
import VehicleSpecs from "../types/VehicleSpecs";
import Animal from "./Animal";
import ResidentialBuilding from "./Building";
import City from "./City";
import Company from "./Company";
import Employee from "./Employee";
import Government from "./Government";
import Highway from "./Highway";
import Mall from "./Mall";
import Person from "./Person";
import Road from "./Road";
import School from "./School";
import Shop from "./Shop";
import TrafficLight from "./TrafficLight";
import Vehicle from "./Vehicle";
import Zoo from "./Zoo";

class Simulation {
  private city: City;

  constructor() {
    this.city = new City("SimCity");
  }

  initialize() {
    this.addBuildings();
    this.addVehicles();
    this.addPeople();
    this.addAnimals();
    this.addCompanies();
    this.addGovernment();
    this.addRoads();
    this.addTrafficLights();
  }

  addBuildings() {
    const mall = new Mall(Symbol("mall"), { x: 10, y: 20 });
    const school = new School(Symbol("school"), { x: 15, y: 25 });
    const shop = new Shop(Symbol("shop"), { x: 20, y: 30 });
    const zoo = new Zoo(Symbol("zoo"), { x: 25, y: 35 });
    const residentialBuilding = new ResidentialBuilding(Symbol("residential"), {
      x: 5,
      y: 10,
    });

    this.city.addBuilding(mall);
    this.city.addBuilding(school);
    this.city.addBuilding(shop);
    this.city.addBuilding(zoo);
    this.city.addBuilding(residentialBuilding);
  }

  addVehicles() {
    const carSpecs: VehicleSpecs = {
      make: "Toyota",
      model: "Corolla",
      year: 2020,
      fuelType: FuelType.Petrol,
      type: VehicleType.Car,
    };

    const busSpecs: VehicleSpecs = {
      make: "Mercedes",
      model: "Sprinter",
      year: 2019,
      fuelType: FuelType.Diesel,
      type: VehicleType.Bus,
    };

    const car = new Vehicle(Symbol("car"), carSpecs, { x: 0, y: 0 });
    const bus = new Vehicle(Symbol("bus"), busSpecs, { x: 5, y: 5 });

    this.city.addVehicle(car);
    this.city.addVehicle(bus);
  }

  addPeople() {
    const personDetails: PersonDetails = {
      name: "John Doe",
      age: 30,
      occupation: "Engineer",
    };

    const person = new Person(Symbol("person"), personDetails, { x: 0, y: 0 });
    this.city.addPerson(person);

    const employeeDetails: PersonDetails = {
      name: "Jane Smith",
      age: 28,
      occupation: "Teacher",
    };

    const employee = new Employee(
      Symbol("employee"),
      employeeDetails,
      { x: 1, y: 1 },
      Symbol("company")
    );
    this.city.addPerson(employee);
  }

  addAnimals() {
    const animal = new Animal(Symbol("animal"), "Lion", { x: 30, y: 40 });
    this.city.addAnimal(animal);
  }

  addCompanies() {
    const company = new Company(Symbol("company"), "TechCorp", "Technology");
    this.city.addCompany(company);
  }

  addGovernment() {
    const government = new Government(
      Symbol("government"),
      "City Hall",
      "SimCountry"
    );
    this.city.addGovernment(government);
  }

  addRoads() {
    const road = new Road(
      Symbol("road"),
      "Main St",
      { x: 0, y: 0 },
      { x: 10, y: 10 }
    );
    const highway = new Highway(
      Symbol("highway"),
      "Highway 1",
      { x: 0, y: 0 },
      { x: 20, y: 20 }
    );

    this.city.addRoad(road);
    this.city.addRoad(highway);
  }

  addTrafficLights() {
    const trafficLight = new TrafficLight(
      Symbol("trafficLight"),
      TrafficLightState.Red
    );
    this.city.addTrafficLight(trafficLight);
  }

  simulate(time: number) {
    this.city.simulate(time);
  }

  generateReport() {
    return this.city.generateReport();
  }
}

export default Simulation;
