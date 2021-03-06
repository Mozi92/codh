export interface Cod_date {
    /**
     * 格式化字符串
     * @param date
     * @param fmt
     */
    dateFormat(date: Date, fmt: string): string,

    /**
     * 比较两个时间大小
     * @param date1
     * @param date2
     */
    compareDate(date1: Date, date2: Date): Boolean
}