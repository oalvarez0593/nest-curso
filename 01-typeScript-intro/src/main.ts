import "./style.css";
import typescriptLogo from "./typescript.svg";
import { setupCounter } from "./counter";

import { name } from "./bases/01-types";
import { pikachu, pokemonsIDs } from "./bases/02-objects";
import { charmander } from "./bases/03-classes";
import { mew } from "./bases/05-decorators";
import { mew2 } from './bases/06-decorator2';
mew
charmander;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <h2>Hello ${name}</h2>
    <p>Este es el array de objecto ${pokemonsIDs}</p>
    <p>Este es el objeto pokemon ${pikachu.name}</p>
    <p>Este es pokemon desde clases ${charmander.name}</p>
    <p>Este es pokemon desde clases ${mew.name}, ${mew.id}</p>
    <p>Este es pokemon desde clases ${mew2.name}</p>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
