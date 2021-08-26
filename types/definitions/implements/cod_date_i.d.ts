import { Cod_date } from "../interfaces/cod_date";
export declare class Cod_date_i implements Cod_date {
    /**
     * 判断字符串是否为空
     * @param str
     */
    isEmpty(str: string): boolean;
    /**
     * 格式化字符串
     * @param date
     * @param fmt
     */
    dateFormat(date: Date, fmt: string): string;
    /**
     * 比较两个时间大小
     * @param date1
     * @param date2
     */
    compareDate(date1: Date, date2: Date): Boolean;
}
