import {Cod_array_i} from "./implements/cod_array_i";
import {Cod_string_i} from "./implements/cod_string_i";
import {Cod_date_i} from "./implements/cod_date_i";
import "./extends/extends"

export function Cod_date() {
    console.log('hello '.perpend('world'))
    return new Cod_date_i()
}

export function Cod_string() {
    return new Cod_string_i()
}

export function Cod_array() {
    return new Cod_array_i()
}