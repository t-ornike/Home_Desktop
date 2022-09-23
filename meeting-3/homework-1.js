// მოკლედ Getter - ბი გამოვიყენე ამიტომ error რომ არ მოეცა, ქვემოთ '()' წაშლილი ობიექტი გამოვაყოლე დალოგვისას

// 1
class Vehicle {
    constructor(make, model){
      this.make = make;
      this.model = model;
    }
  }
  
  
  class Car extends Vehicle {
    // 5
    owners = []
    constructor(make, model, year){
          super(make, model);
      this.year = year;
      }
  // 2
    get getCarInfo() {
      return `${this.make} ${this.model} is released in ${this.year}`;
    }
  
    // 6
    addOwner = owner => this.owners.push(owner);
    removeOwner = owner => {
      let indexOfOwner = this.owners.indexOf(owner);
      this.owners.splice(indexOfOwner, 1);
    }
    get getOwnersCount() { return this.owners.length };
    // 8
    get getOwnerNames() { return this.owners.map(owner => ` ${owner.fullName}`);} 
       
    //9
    get getFullInfo(){ return `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount} person owns this car. These are -${this.getOwnerNames}`
  } }
  
  
  
  // 3
  class Person {
    constructor (name, surname, age, gender, cars = []) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.cars = cars;
    }
  
    // 4
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
    get countCars() {
      return Array.isArray(this.cars) ? this.cars.length : `enter array of cars as argument`;
    }
    // 7
    buysCar = (car) => {
      this.cars.push(car);
      car.addOwner(this)
    }
    sellsCar = (car) => {
      let indexOfCars = this.cars.indexOf(car);
      this.cars.splice(indexOfCars, 1);
      car.removeOwner(this);
    }
    // 10
    get getAllCarsInfo() { return `${this.name} owns these cars:${ this.cars.map(car => ` ${car.getCarInfo}`) }`
  }
  }
  
  
  let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
  let ilona = new Person("Elon", "Musk", 30, "M");
  let duti_picoti = new Car("BMW", "525", "1999");
  let stodevianosto = new Car("Mercedes", "E190", 1991);
  
  daniel916.buysCar(duti_picoti); // adds passed car
  daniel916.buysCar(stodevianosto); // adds passed car
  daniel916.sellsCar(duti_picoti); // removes passed car
  ilona.buysCar(stodevianosto); // adds passed car
  ilona.buysCar(duti_picoti); // adds passed car
  
  console.log({
    daniel: {
      fullName: daniel916.fullName,
      countCars: daniel916.countCars,
      getAllCarsInfo: daniel916.getAllCarsInfo,
    },
    elon: {
      fullName: ilona.fullName,
      countCars: ilona.countCars,
      getAllCarsInfo: ilona.getAllCarsInfo,
    },
    duti_picoti: {
      getOwnersCount: duti_picoti.getOwnersCount,
      getOwnerNames: duti_picoti.getOwnerNames,
      getFullInfo: duti_picoti.getFullInfo,
      getCarInfo: duti_picoti.getCarInfo,
    },
    stodevianosto: {
      getOwnersCount: stodevianosto.getOwnersCount,
      getOwnerNames: stodevianosto.getOwnerNames,
      getFullInfo: stodevianosto.getFullInfo,
      getCarInfo: stodevianosto.getCarInfo,
    },
  });
  