import {ProxyState} from '../AppState.js'
import {housesService} from '../Services/HousesServices.js'

function _draw(){
  let houses = ProxyState.houses
  let template = ''
  houses.forEach(house => {
    template += house.Template
  })
  document.getElementById('houses').innerHTML = template
}


export default class HousesController{
  constructor(){
    ProxyState.on('houses', _draw)
    _draw()
  }
  
  createHouse() {
    // if this method is triggered by an event (submit event) prevent the default action of reloding the page
    window.event.preventDefault()
    // grab the element from html that triggered this event
    const form = window.event.target
    debugger
    let newHouse = {
      // @ts-ignore
      bedrooms: form.bedrooms.value,
      // @ts-ignore
      bathrooms: form.bedrooms.value,
      // @ts-ignore
      sqFootage: form.sqFootage.value,
      // @ts-ignore  this converts the string to a number
      price: Number(form.price.value),
      // @ts-ignore
      address: form.address.value,
      // @ts-ignore
      imgUrl: form.imgUrl.value
    }
    housesService.createHouse(newHouse)
  
    // @ts-ignore
    form.reset()
  
    // get the modal and close (using jQuery's "$" selector) 
    $('#new-house-form').modal('hide')
  }
  deleteHouse(id){
    housesService.deleteHouse(id)
  }
  bid(id){
    housesService.bid(id)
  }
}

console.log('from HousesController')