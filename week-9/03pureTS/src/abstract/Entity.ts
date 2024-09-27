import Identifiable from "../interfaces/Identifiable";

abstract class Entity implements Identifiable {
  constructor(public id: symbol) {}
}

export default Entity;
