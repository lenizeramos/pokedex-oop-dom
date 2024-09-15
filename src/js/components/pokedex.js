import { Component } from "../common/component.js";
import { PokedexContext } from "../context/pokedexContext.js";

const BASE_CLASS = "pokedex";

export class Pokedex extends Component {
  constructor(parentElement) {
    super(parentElement, {}, { pokedex: PokedexContext.getInstance() });

    this.context.pokedex.addStateChangeListener(() => this.render());
  }

  render() {
    this.parentElement.append('<p>Pokedex</p>');
  }
}
