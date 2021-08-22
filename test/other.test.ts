import {it} from "mocha";
import {expect} from "chai";
import {Cod_date_i} from "../src/implements/cod_date_i";
import {Cod_string_i} from "../src/implements/cod_string_i";
import {Cod_array_i} from "../src/implements/cod_array_i";

describe('CodArray测试', function () {
    it('获取随机元素', function () {
        const result = new Cod_array_i().sampled([1, 2, 3, 4, 5, 6, 7, 8], 1, 5);
        expect(result.length).to.be.equal(5);
        expect(result[0]).to.not.equal(1)
    })
})

describe('CodDate测试', function () {
    it('时间测试', function () {
        const fn=new Cod_date_i()
        const result = fn.compareDate(new Date(), new Date())
        expect(result).to.be.a('Boolean')
        expect(result).to.be.equal(false)
        const d=fn.dateFormat(new Date(),'YYYY-MM-DD')
        expect(d.length).to.be.equal(10)
    });
});

describe('CodString测试', function () {
    it('字符串处理测试', function () {
        const fn=new Cod_string_i()
        const str=fn.randomStr(9,15)
        expect(str.length).to.be.lte(15)
        expect(str.length).to.be.gte(9)
        const result = new Cod_string_i().substr(str, 6)
        expect(result.length).to.be.lte(str.length)
    });
});