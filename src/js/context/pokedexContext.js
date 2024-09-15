export class PokedexContext {
  static instance; // to store you single instance
  #items; // array to store all the pokemons captured
  #stateChangeListeners; // callbacks for when any state changes

  constructor() {
    this.#items = [];
    this.#stateChangeListeners = [];
  }

  static getInstance() {
    if (!PokedexContext.instance) {
      PokedexContext.instance = new PokedexContext();
    }
    return PokedexContext.instance;
  }

  addStateChangeListener(func) {
    this.#stateChangeListeners.push(func);
  }

  capturePokemon(pokemon) {
    console.log("need to implement the click functionality");
    //implement
  }

  releasePokemon(id) {
    //implement
  }

  /* 
      Include other functions as you seem fit.
  */
}
