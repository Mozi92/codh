import {Cod_array_i} from "./implements/cod_array_i";
import {Cod_string_i} from "./implements/cod_string_i";
import {Cod_date_i} from "./implements/cod_date_i";

export function CodArray() {
    return new Cod_array_i()
}

export function CodString() {
    return new Cod_string_i()
}

export function CodDate() {
    return new Cod_date_i()
}