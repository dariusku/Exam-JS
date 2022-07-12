/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
 let a = prompt(('1 skaicius'));
 let b = prompt(('2 skaicius'));

function Calculator (a, b) {
    this.a = Number(a);
    this.b = Number(b);

    this.sum = function() {
        return (this.a) + (this.b);
      };
    this.subs = function() {
        return this.a - this.b;
      };
    this.multi = function() {
        return this.a * this.b;
      };
    this.division = function() {
        return this.a / this.b;
      };
}
let suma  = new Calculator(a, b)
console.log(`suma yra`+' '+(suma.sum()))

const sub = new Calculator(a, b)
console.log(`atėmus gauname`+' '+(sub.subs()))

const multiply = new Calculator(a, b)
console.log(`padauginus gauname`+' '+ multiply.multi())

const divis = new Calculator(a, b)
console.log(`padauginus gauname`+' '+divis.division())