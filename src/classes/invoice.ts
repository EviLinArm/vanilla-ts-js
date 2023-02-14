import HasFormatter from "../interfaces/HasFormatter";
class Invoice implements HasFormatter {
    constructor(
        readonly client: string,
        private details: string,
        public amount: number
    ){}

    format() {
        return `${this.client}, ${this.amount}, ${this.details}`
    }
}

export default Invoice