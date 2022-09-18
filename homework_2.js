      // 1
      function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
      // 2
        this.getCarInfo = ()=> {
          return `${this.make} ${this.model} is released in ${this.year}`;
        }
        // 5
        this.owners = [];
        // 6
        this.addOwner = owner => this.owners.push(owner);
        this.removeOwner = owner => {
          let indexOfOwner = this.owners.indexOf(owner);
          this.owners.splice(indexOfOwner, 1);
        }
        this.getOwnersCount = () => this.owners.length;
        // 8
        this.getOwnerNames = () => 
           this.owners.map(owner => ` ${owner.fullName()}`);
        //9
        this.getFullInfo = () => `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount()} person owns this car. These are -${this.getOwnerNames()}`
      }


      
      // 3
      function Person(name, surname, age, gender, cars = []) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.cars = cars;
        // 4
        this.fullName = () => {
          return `${this.name} ${this.surname}`;
        }
        this.countCars = () => {
          return Array.isArray(this.cars) ? this.cars.length : `enter array of cars as argument`;
        }
        // 7
          this.buysCar = (car) => {
          this.cars.push(car);
          car.addOwner(this)
        }
        this.sellsCar = (car) => {
          let indexOfCars = this.cars.indexOf(car);
          this.cars.splice(indexOfCars, 1);
          car.removeOwner(this);
        }
        // 10
          this.getAllCarsInfo = () => `${this.name} owns these cars:${ this.cars.map(car => ` ${car.getCarInfo()}`) }`
      }