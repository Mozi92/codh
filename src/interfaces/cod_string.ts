export interface Cod_string {
    (min: number, max: number): string,//生成指定长度范围的随机串
    (str: string, len: number): string,//处理中英文指定长度串
}