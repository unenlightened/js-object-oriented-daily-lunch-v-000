// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0
let mealId = 0
let customerId = 0
let deliveryId = 0

class Neighborhood {
  constructor(name) {
    this.id = neighborhoodId++
    this.name = name
  }
}

class Customer {
  constructor(name, neighborhoodId) {
    this.id = customerId++
    this.name = name
    this.neighborhoodId = neighborhoodId
  }
}

class Meal {
  constructor(title, price) {
    this.id = mealId++
    this.title = title
    this.price = price
  }
}

class Delivery {
  constructor(mealId, neighborhoodId, customerId) {
    this.id = deliveryId++
    this.mealId = mealId
    this.neighborhoodId = neighborhoodId
    this.customerId = customerId
  }
}
