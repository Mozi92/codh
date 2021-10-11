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

interface Fish {
    swim(): any;

    layEggs(): any;
}

interface Bird {
    fly(): any;

    layEggs(): any;
}

class Pet implements Fish, Bird {
    fly(): any {
        console.log('i am a bird')
    }

    layEggs(): any {
    }

    swim(): any {
        console.log('i am a fish')
    }

}

function getSmallPet() {
    let pet = new Pet()
    let p = <Fish>pet
    console.log('pet------------------', p.swim())
    if (isFish(pet)) {
        console.log(pet.fly())
    } else {
        console.log('pet------------------', p.swim())
    }
}

function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

getSmallPet()


export function Cod_date() {
    return new Cod_date_i()
}

export function Cod_string() {
    return new Cod_string_i()
}

export function Cod_array() {
    return new Cod_array_i()
}