import {Cod_array_i} from "./implements/cod_array_i";
import {Cod_string_i} from "./implements/cod_string_i";
import {Cod_date_i} from "./implements/cod_date_i";

// export default {
//     Cod_date:new Cod_date_i(),
//     Cod_string:new Cod_string_i(),
//     Cod_array:new Cod_array_i(),
// }

export function Cod_date() {
    return new Cod_date_i()
}

export function Cod_string() {
    return new Cod_string_i()
}

export function Cod_array() {
    return new Cod_array_i()
}