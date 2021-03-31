import {ProxyState} from '../AppState.js'
import House from '../Models/House.js'

class HousesService{
 createHouse(newHouse){
 let house = new House(newHouse.bedrooms, newHouse.bathrooms, newHouse.sqFootage, newHouse.address, newHouse.price, newHouse.imgUrl) 
 ProxyState.houses = [...ProxyState.houses, house]
 }

 deleteHouse(id){
  let house = ProxyState.houses.find(house => house.id === id)
  ProxyState.houses = ProxyState.houses
 }

 moreInfo(id){
  ProxyState.houses = ProxyState.houses.filter(house => house.id != id)
 }

}

export const housesService = new HousesService();

console.log('from HousesServices')