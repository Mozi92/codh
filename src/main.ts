import {Cod_array_i} from "./implements/cod_array_i";
import {Cod_string_i} from "./implements/cod_string_i";
import {Cod_date_i} from "./implements/cod_date_i";
// import too = require("umd");
// import * as moment from "moment";
//
// String.prototype.perpend = function (this: string, str: string) {
//     return this + str;
// }
//
// moment.prototype.moo = function (str: string): string {
//     return str
// }

export function Cod_date() {
    // console.log(too)
    // console.log('hello '.perpend('world'))
    // console.log(moment)
    return new Cod_date_i()
}

export function Cod_string() {
    return new Cod_string_i()
}

export function Cod_array() {
    return new Cod_array_i()
}