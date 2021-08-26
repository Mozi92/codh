export default Emi

declare enum Emi {
    up,
    down
}

export function Zip(id: string): void

export class Doo {
    name: string

    grad(many: number): number
}

declare namespace Cod {
    /**
     * 取所及数组
     * @param source
     * @param begin
     * @param len
     * @constructor
     */
    function Cod_array<T>(source: Array<T>, begin: number, len?: number): Array<T>//取数组随中随机指定的元素
    function Cod_string(min: number, max: number): string//随机串
    function Cod_date(date: Date, fmt: string): string//格式化字符串
}
