
class RandomGenerator {
  static randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomChoice<T>(choices: T[]): T {
    const index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }
}

export default RandomGenerator;

