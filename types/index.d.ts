declare namespace Cod {
    function Cod_array<T>(source: Array<T>, begin: number, len?: number): Array<T>//取数组随中随机指定的元素
    function Cod_string(min: number, max: number): string//随机串
    function Cod_date(date: Date, fmt: string): string//格式化字符串
}
