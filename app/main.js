import HeroesController from "./Controllers/HeroesController.js";

class App {
  HeroesController = new HeroesController();
}

window["app"] = new App();
