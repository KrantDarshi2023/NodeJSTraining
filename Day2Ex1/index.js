class Car{
    model;
    constructor(model){
        this.model=model;
        this.fuel=0;
    }
    getCarModel(){
        console.log(`Car Model":${this.model}`);
    }
    addFuel(value){
        this.fuel+=value;
    }
}
const car1=new Car("Toyota")
const car2=new Car("Hyundai")

console.log(`Car1 Current Fuel Value: ${car1.fuel}`)
console.log(`Car2 Current Fuel Value: ${car2.fuel}`)


car1.addFuel(50)
car2.addFuel(100)

console.log(`Car1 After Refueling: ${car1.fuel}`)
console.log(`Car2 After Refueling: ${car2.fuel}`)