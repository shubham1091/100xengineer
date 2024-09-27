import Entity from "../abstract/Entity";
import TrafficLightState from "../enums/TrafficLightState";
import Logger from "../utils/Logger";

class TrafficLight extends Entity {
  private state: TrafficLightState;

  constructor(
    id: symbol,
    initialState: TrafficLightState = TrafficLightState.Red
  ) {
    super(id);
    this.state = initialState;
  }

  changeState(newState: TrafficLightState): void {
    this.state = newState;
    // Logger.log(`Traffic light ${this.id.toString()} changed to ${this.state}`);
  }

  getState(): TrafficLightState {
    return this.state;
  }
}

export default TrafficLight;
