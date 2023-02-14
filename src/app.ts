import Invoice from "./classes/invoice";
import Payment from "./classes/payment";
import HasFormatter from "./interfaces/HasFormatter";
import ListTemplate from "./classes/ListTemplate";
import listTemplate from "./classes/ListTemplate";

const form = document.querySelector('.new-item-form') as HTMLFormElement

const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')
if (ul) {
    const list = new ListTemplate(ul)
    form.addEventListener('submit', (e : Event) => {
        e.preventDefault()

        let values: [string, string, number]
        values = [toFrom.value, details.value, amount.valueAsNumber]

        let doc: HasFormatter;
        if (type.value === 'invoice') {
            doc = new Invoice(...values)
        } else {
            doc = new Payment(...values)
        }

        list.render(doc, 'Heading', "end")
    })
}
