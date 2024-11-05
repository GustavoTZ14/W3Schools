class Car {
  constructor(brand, ano) {
    this.carname = brand;
    this.carano = ano;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, ano, mod) {
    super(brand, ano);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model + 'ano do carro ' + this.carano;
  }
}

let myCar = new Model("Ford", 1970, "Mustang");
console.log(myCar.show());

// getters e setters

class Carro {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this._carname = x;
  }
}

const myCarro = new Carro("Ford");
myCarro.carname = "Volvo"; // metodo setter
console.log(myCarro.carname);
