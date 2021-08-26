/**
 * 创建数组
 * @param len
 * @param value
 */
export function createArray<T>(len: number, value: T): Array<T> {
    let result: T[] = []
    for (let i = 0; i < len; i++) {
        result[i] = value
    }
    return result
}

/**
 * 交换元组
 * @param tuple
 */
export function swag<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}

interface wig {
    length: number
}

/**
 * 泛型约束(T必须包含length属性)
 * @param arg
 */
export function logging<T extends wig>(arg: T): T {
    console.log(arg.length)
    return arg
}

/**
 * 多类型参数相互约束
 * @param target
 * @param source
 */
export function copyFields<T extends U, U>(target: T, source: U): T {
    for (const targetKey in source) {
        target[targetKey] = (<T>source)[targetKey]
    }
    return target
}