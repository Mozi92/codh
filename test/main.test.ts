import 'mocha'
import {expect, should, assert} from 'chai'
import {spy} from 'sinon'
import {CodArray, CodDate, CodString} from "../src/main";
import {it} from "mocha";


/**
 * 测试函数
 * 接受一个函数，并在返回函数每次调用时给其传入一个闭包的累加值
 */
const testFunc = function (callback: (num: number) => any): () => void {
    let localValue = 0;
    return () => callback(localValue++)
}

describe('CodArray测试', function () {
    it('获取随机元素', function () {
        const result = CodArray().sampled([1, 2, 3, 4, 5, 6, 7, 8], 1, 5);
        expect(result.length).to.be.equal(5);
        expect(result[0]).to.not.equal(1)
    })
})

describe('CodDate测试', function () {
    it('时间测试', function () {
        const result = CodDate().compareDate(new Date(), new Date())
        expect(result).to.be.a('Boolean')
        expect(result).to.be.equal(false)
    });
});

describe('CodString测试', function () {
    it('字符串处理测试', function () {
        const result = CodString().substr('ssssss都会发生口角而骄傲从', 6)
        expect(result).to.be.equal('DJHFDS都会发...')
    });
});