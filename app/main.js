import HousesController from './Controllers/HousesController.js'
import CarsController from './Controllers/CarsController.js'

class App {
  carsController = new CarsController();
  housesController = new HousesController();
}

window["app"] = new App();
