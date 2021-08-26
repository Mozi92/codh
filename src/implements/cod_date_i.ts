import {Cod_date} from "../interfaces/cod_date";

export class Cod_date_i implements Cod_date {
    /**
     * 判断字符串是否为空
     * @param str
     */
    private isEmpty(str: string) {
        if (str === null || str === undefined) {
            return true;
        } else {
            let strValue = str.trim();
            return (strValue === '');
        }
    }

    /**
     * 格式化字符串
     * @param date
     * @param fmt
     */
    dateFormat(date: Date, fmt: string): string {
        if (!date) {
            return '';
        }
        const o = {
            'M+': date.getMonth() + 1, // 月份
            'd+': date.getDate(), // 日
            'h+': date.getHours(), // 小时
            'm+': date.getMinutes(), // 分
            's+': date.getSeconds(), // 秒
            'q+': Math.floor((date.getMonth() + 3) / 3), // 季度,
            'S': date.getMilliseconds(), // 毫秒
        };
        let res = '';
        if (!this.isEmpty(fmt)) {
            res = fmt;
            if (/(y+)/.test(fmt)) {
                res = res.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            for (let k in o) {
                if (new RegExp('(' + k + ')').test(res)) {
                    // @ts-ignore
                    res = res.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
                }
            }
        }
        return res;
    }

    /**
     * 比较两个时间大小
     * @param date1
     * @param date2
     */
    compareDate(date1: Date, date2: Date): Boolean {
        return date1.getTime() - date2.getTime() > 0
    }
}