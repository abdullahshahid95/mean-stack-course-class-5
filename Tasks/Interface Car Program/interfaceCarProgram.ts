interface Car
{
    make: string;
    model: string;
    year: number;
    color: string;
    transmission: string;
    trim: number | string;
    milage: number;
}

class Suzuki implements Car
{
    make: string;
    model: string;
    year: number;
    color: string;
    transmission: string;
    trim: number | string;
    milage: number;

    constructor()
    {
        this.make = "Suzuki";
    }
}

class Alto extends Suzuki
{
    setValues()
    {
        this.model = "Alto";
        this.year = 2016;
        this.color = "Silver";
        this.transmission = "Automaic";
        this.trim = "X";
        this.milage = 5000;
    }
}
class Cultus extends Suzuki
{
    setValues()
    {
        this.model = "Cultus";
        this.year = 2005;
        this.color = "Grey";
        this.transmission = "Manual";
        this.trim = "1.0 VXL";
        this.milage = 125000;
    }
}
class Swift extends Suzuki
{
    setValues()
    {
        this.model = "Swift";
        this.year = 2011;
        this.color = "Pearl White";
        this.transmission = "Manual";
        this.trim = "1.3 DX";
        this.milage = 90000;
    }
}

///
class Toyota implements Car
{
    make: string;
    model: string;
    year: number;
    color: string;
    seats: number;
    transmission: string;
    trim: number | string;
    milage: number;

    constructor()
    {
        this.make = "Toyota";
    }
}

class Corolla extends Toyota
{
    setValues()
    {
        this.model = "Corolla";
        this.year = 2018;
        this.color = "White";
        this.transmission = "Automaic";
        this.trim = "1.3 GLI";
        this.milage = 5000;
    }
}
class Premio extends Toyota
{
    setValues()
    {
        this.model = "Premio";
        this.year = 2013;
        this.color = "Black";
        this.transmission = "Automatic";
        this.trim = "1.8 X";
        this.milage = 10000;
    }
}
class Mark2 extends Toyota
{
    setValues()
    {
        this.model = "Mark 2";
        this.year = 2002;
        this.color = "Green";
        this.transmission = "Automatic";
        this.trim = 2;
        this.milage = 150000;
    }
}

///
class Nissan implements Car
{
    make: string;
    model: string;
    year: number;
    color: string;
    seats: number;
    transmission: string;
    trim: number | string;
    milage: number;

    constructor()
    {
        this.make = "Nissan";

    }
}

class Wingroad extends Nissan
{
    setValues()
    {
        this.model = "Wingroad";
        this.year = 2007;
        this.color = "White";
        this.transmission = "Automaic";
        this.trim = "1.5";
        this.milage = 50000;
    }
}
class Dayz extends Nissan
{
    setValues()
    {
        this.model = "Dayz";
        this.year = 2016;
        this.color = "Black";
        this.transmission = "Automatic";
        this.trim = "660cc";
        this.milage = 20000;
    }
}
class Moco extends Nissan
{
    setValues()
    {
        this.model = "Moco";
        this.year = 2014;
        this.color = "White";
        this.transmission = "Automatic";
        this.trim = "660cc";
        this.milage = 21000;
    }
}

var suzuki = new Suzuki();
var toyota = new Toyota();
var nissan = new Nissan();

var alto = new Alto();
var corolla = new Corolla();
var dayz = new Dayz();

alto.setValues();
console.log("Brand: " + alto.make);
console.log("Model: " + alto.model);
console.log("Year: " + alto.year);
console.log("Color: " + alto.color);
console.log("Transmission: " + alto.transmission);
console.log("Trim: " + alto.trim);
console.log("Milage: " + alto.milage);

console.log("*****************************");

corolla.setValues();
console.log("Brand: " + corolla.make);
console.log("Model: " + corolla.model);
console.log("Year: " + corolla.year);
console.log("Color: " + corolla.color);
console.log("Transmission: " + corolla.transmission);
console.log("Trim: " + corolla.trim);
console.log("Milage: " + corolla.milage);

console.log("*****************************");

dayz.setValues();
console.log("Brand: " + dayz.make);
console.log("Model: " + dayz.model);
console.log("Year: " + dayz.year);
console.log("Color: " + dayz.color);
console.log("Transmission: " + dayz.transmission);
console.log("Trim: " + dayz.trim);
console.log("Milage: " + dayz.milage);