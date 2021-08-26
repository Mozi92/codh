import {Cod_array_i} from "./implements/cod_array_i";
import {Cod_string_i} from "./implements/cod_string_i";
import {Cod_date_i} from "./implements/cod_date_i";
import {createArray, logging, copyFields} from "./common/tools";
import "./extends/extends"

export default createArray

console.log('hello '.perpend('world'))
let r = createArray<string>(3, 'boo')
console.log(r)
logging<string>('hello')
let x = {a: 1, b: 2, c: 3, d: 4}
let y = copyFields(x, {b: 10, d: 20});
console.log(y)

export function Cod_date() {
    return new Cod_date_i()
}

export function Cod_string() {
    return new Cod_string_i()
}

export function Cod_array() {
    return new Cod_array_i()
}