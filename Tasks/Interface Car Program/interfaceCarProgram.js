var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Suzuki = /** @class */ (function () {
    function Suzuki() {
        this.make = "Suzuki";
    }
    return Suzuki;
}());
var Alto = /** @class */ (function (_super) {
    __extends(Alto, _super);
    function Alto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Alto.prototype.setValues = function () {
        this.model = "Alto";
        this.year = 2016;
        this.color = "Silver";
        this.transmission = "Automaic";
        this.trim = "X";
        this.milage = 5000;
    };
    return Alto;
}(Suzuki));
var Cultus = /** @class */ (function (_super) {
    __extends(Cultus, _super);
    function Cultus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cultus.prototype.setValues = function () {
        this.model = "Cultus";
        this.year = 2005;
        this.color = "Grey";
        this.transmission = "Manual";
        this.trim = "1.0 VXL";
        this.milage = 125000;
    };
    return Cultus;
}(Suzuki));
var Swift = /** @class */ (function (_super) {
    __extends(Swift, _super);
    function Swift() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Swift.prototype.setValues = function () {
        this.model = "Swift";
        this.year = 2011;
        this.color = "Pearl White";
        this.transmission = "Manual";
        this.trim = "1.3 DX";
        this.milage = 90000;
    };
    return Swift;
}(Suzuki));
///
var Toyota = /** @class */ (function () {
    function Toyota() {
        this.make = "Toyota";
    }
    return Toyota;
}());
var Corolla = /** @class */ (function (_super) {
    __extends(Corolla, _super);
    function Corolla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Corolla.prototype.setValues = function () {
        this.model = "Corolla";
        this.year = 2018;
        this.color = "White";
        this.transmission = "Automaic";
        this.trim = "1.3 GLI";
        this.milage = 5000;
    };
    return Corolla;
}(Toyota));
var Premio = /** @class */ (function (_super) {
    __extends(Premio, _super);
    function Premio() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Premio.prototype.setValues = function () {
        this.model = "Premio";
        this.year = 2013;
        this.color = "Black";
        this.transmission = "Automatic";
        this.trim = "1.8 X";
        this.milage = 10000;
    };
    return Premio;
}(Toyota));
var Mark2 = /** @class */ (function (_super) {
    __extends(Mark2, _super);
    function Mark2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mark2.prototype.setValues = function () {
        this.model = "Mark 2";
        this.year = 2002;
        this.color = "Green";
        this.transmission = "Automatic";
        this.trim = 2;
        this.milage = 150000;
    };
    return Mark2;
}(Toyota));
///
var Nissan = /** @class */ (function () {
    function Nissan() {
        this.make = "Nissan";
    }
    return Nissan;
}());
var Wingroad = /** @class */ (function (_super) {
    __extends(Wingroad, _super);
    function Wingroad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wingroad.prototype.setValues = function () {
        this.model = "Wingroad";
        this.year = 2007;
        this.color = "White";
        this.transmission = "Automaic";
        this.trim = "1.5";
        this.milage = 50000;
    };
    return Wingroad;
}(Nissan));
var Dayz = /** @class */ (function (_super) {
    __extends(Dayz, _super);
    function Dayz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dayz.prototype.setValues = function () {
        this.model = "Dayz";
        this.year = 2016;
        this.color = "Black";
        this.transmission = "Automatic";
        this.trim = "660cc";
        this.milage = 20000;
    };
    return Dayz;
}(Nissan));
var Moco = /** @class */ (function (_super) {
    __extends(Moco, _super);
    function Moco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moco.prototype.setValues = function () {
        this.model = "Moco";
        this.year = 2014;
        this.color = "White";
        this.transmission = "Automatic";
        this.trim = "660cc";
        this.milage = 21000;
    };
    return Moco;
}(Nissan));
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
