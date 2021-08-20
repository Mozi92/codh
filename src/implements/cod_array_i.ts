import {Cod_array} from "../interfaces/cod_array";

// @ts-ignore
export class Cod_array_i<T> implements Cod_array<T> {
    /**
     * 随机抽取数组中元素
     * @param source
     * @param begin
     * @param len
     */
    sampled(source: Array<T>, begin: number, len?: number): Array<T> {
        if (begin < 1)
            begin = 0
        if (!len || len < 1)
            len = 0
        let tmp = source.slice(begin)
        let max = tmp.length
        if (max <= len)
            return tmp
        let result = []
        for (let i = 0; i < len; i++) {
            let curr = Math.floor(Math.random() * max)
            result.push(tmp[curr])
            max--
            tmp.splice(curr, 1)
        }
        return result
    }
}