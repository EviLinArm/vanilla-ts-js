import HasFormatter from "../interfaces/HasFormatter";
class Payment implements HasFormatter {
    constructor(
        readonly recipient: string,
        private details: string,
        public amount: number
    ){}

    format() {
        return `${this.recipient}, ${this.amount}, ${this.details}`
    }
}

export default Payment