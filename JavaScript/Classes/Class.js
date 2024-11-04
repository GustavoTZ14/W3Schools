class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car("Uno way", 2009);
console.log(`Meu carro é um ${myCar.name} e tem ${myCar.age()} anos mais velho.`);