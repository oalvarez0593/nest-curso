import axios from "axios";
import { PokeapiResponse } from "./interfaces/pokeapi-response.interface";
export class Pokemon {
  constructor(public id: number, public name: string) {}

  async getMoves() {
    const resp = await axios.get<PokeapiResponse>(
      "https://pokeapi.co/api/v2/pokemon/4"
    );

    console.log(resp.data);
  }
}

export const charmander = new Pokemon(4, "charmander");
/* console.log(charmander.getMoves()); */
charmander.getMoves();
