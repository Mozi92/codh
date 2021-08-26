import { Cod_array } from "../interfaces/cod_array";
export declare class Cod_array_i<T> implements Cod_array<T> {
    /**
     * 随机抽取数组中元素
     * @param source
     * @param begin
     * @param len
     */
    sampled(source: Array<T>, begin: number, len?: number): Array<T>;
}
