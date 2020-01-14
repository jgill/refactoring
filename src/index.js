import { statement } from "../src/statement"
import invoices from "../data/invoices.json"
import plays from "../data/plays.json"


const myStatement = statement(invoices[0], plays)
console.log(myStatement)
