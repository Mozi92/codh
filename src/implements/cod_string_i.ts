import {Cod_string} from "../interfaces/cod_string";

// @ts-ignore
export class Cod_string_i implements Cod_string {
    randomStr(min: number, max: number): string {
        if (min < 1)
            min = 1
        const len = Math.round(Math.random() * max + min);
        const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz';
        const maxPos = chars.length;
        let str = '';
        for (let i = 0; i < len; i++) {
            str += chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return str;
    }

    substr(str: string, len: number): string {
        const reg = /[\u4e00-\u9fa5]/g,
            slice = str.substring(0, len),
            chineseCharNum = (~~(slice.match(reg) && slice.match(reg).length)),
            realer = slice.length * 2 - chineseCharNum;
        return str.substr(0, realer) + (realer < str.length ? "..." : "");
    }
}