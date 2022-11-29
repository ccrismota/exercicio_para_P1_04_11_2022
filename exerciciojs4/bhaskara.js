import { Equacao } from "./equacao.js";

class Bhaskara extends Equacao {

    
    calcularDelta() {
        return (this.b * this.b) - (4 * this.a * this.c);
    }

    calcularX1() {
        return (-this.b + Math.sqrt(this.calcularDelta())) / (2 * this.a);
    }

    calcularX2() {
        return (-this.b - Math.sqrt(this.calcularDelta())) / (2 * this.a);
    }
}

export { Bhaskara }