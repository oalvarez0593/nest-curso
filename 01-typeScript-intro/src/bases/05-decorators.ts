class newPokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`NO QUIEROOOOO!`);
  }

  speak() {
    console.log(`No quiero hablar!`);
  }
}

const myDecorator = () => {
  return (target: Function) => {
    return newPokemon;
  };
};

@myDecorator()
export class Pokemon {
  constructor(public readonly id: number, public name: string) {}

  scream() {
    console.log(`${this.name.toUpperCase()}!!`);
  }

  speak() {
    console.log(`${this.name}`!);
  }
}

export const mew = new Pokemon(1, "Mew");

mew.scream();
mew.speak();
