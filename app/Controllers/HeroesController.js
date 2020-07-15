import HeroesService from "../Services/HeroesService.js";
import store from "../store.js";

//Private
function _draw() {
  let template = ""
  let heroes = store.State.heroes;
  heroes.forEach(h => template += h.Template)
  document.getElementById("Heroes").innerHTML = template

}
function _drawMyHero() {

  let template = ""
  let myHeroes = store.State.myHeroes;
  myHeroes.forEach(h => template += h.HeroTemplate)
  document.getElementById("my-hero").innerHTML = template



}

//Public
export default class HeroesController {
  constructor() {
    store.subscribe("heroes", _draw);
    store.subscribe("myHeroes", _drawMyHero)
  }

  getHeroes() {
    HeroesService.getHeroes()
  }
  getMyHeroes() {
    HeroesService.getMyHeroes()
  }

  myHero(heroId) {
    HeroesService.myHero(heroId)
  }

  deleteMyHero(heroId) {
    HeroesService.deleteMyHero(heroId)
  }
}
