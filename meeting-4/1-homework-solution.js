const carMethods = {
    getCarInfo() {
        return `${this.make} ${this.model} is released in ${this.year}`;
      },
    addOwner(owner) {
      this.owners.push(owner);
      },
    removeOwner(owner) {
      let indexOfOwner = this.owners.indexOf(owner);
      this.owners.splice(indexOfOwner, 1);
      },
    getOwnersCount() { return this.owners.length; },
    getOwnerNames() {
        return this.owners.map(owner => ` ${owner.fullName()}`);
      }, 
    getFullInfo() { return `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount()} person owns this car. These are -${this.getOwnerNames()}`
      }
  }
  
  
  const personMethods = {
    fullName() {
      return `${this.name} ${this.surname}`;
    },
    countCars() {
          return Array.isArray(this.cars) ? this.cars.length : `enter array of cars as argument`;
    },
    buysCar(car) {
      this.cars.push(car);
      car.addOwner(this)
    },
    sellsCar(car) {
      let indexOfCars = this.cars.indexOf(car);
      this.cars.splice(indexOfCars, 1);
      car.removeOwner(this);
    },
    getAllCarsInfo() { return `${this.name} owns these cars:${ this.cars.map(car => ` ${car.getCarInfo()}`) }` }
  }
  
  
  function createCar(make, model, year) {
    const car = Object.create(carMethods);
    car.owners = [];
    car.make = make;
    car.model = model;
    car.year = year;
    return car;
  }
  

  function createPerson(name, surname, age, gender, cars = []) {
    const person = Object.create(personMethods);
    person.name = name;
    person.surname = surname;
    person.age = age;
    person.gender = gender;
    person.cars = cars;
    return person;
  }
  
  
  
  
  let daniel916 = createPerson("Daniel", "Barbakadze", 21, "M", []);
  let ilona = createPerson("Elon", "Musk", 30, "M");
  let duti_picoti = createCar("BMW", "525", "1999");
  let stodevianosto = createCar("Mercedes", "E190", 1991);
  
  daniel916.buysCar(duti_picoti); // adds passed car
  daniel916.buysCar(stodevianosto); // adds passed car
  daniel916.sellsCar(duti_picoti); // removes passed car
  ilona.buysCar(stodevianosto); // adds passed car
  ilona.buysCar(duti_picoti); // adds passed car
  
  
  
  console.log({
    daniel: {
      fullName: daniel916.fullName(),
      countCars: daniel916.countCars(),
      getAllCarsInfo: daniel916.getAllCarsInfo(),
    },
    elon: {
      fullName: ilona.fullName(),
      countCars: ilona.countCars(),
      getAllCarsInfo: ilona.getAllCarsInfo(),
    },
    duti_picoti: {
      getOwnersCount: duti_picoti.getOwnersCount(),
      getOwnerNames: duti_picoti.getOwnerNames(),
      getFullInfo: duti_picoti.getFullInfo(),
      getCarInfo: duti_picoti.getCarInfo(),
    },
    stodevianosto: {
      getOwnersCount: stodevianosto.getOwnersCount(),
      getOwnerNames: stodevianosto.getOwnerNames(),
      getFullInfo: stodevianosto.getFullInfo(),
      getCarInfo: stodevianosto.getCarInfo(),
    },
  });
  