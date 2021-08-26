import 'mocha'
import {expect} from 'chai'
import * as Cod from "../src/main";
import {it} from "mocha";


describe('测试main函数', () => {
    it('should 3 functions', function () {
        let sum = 0;
        for (let codKey in Cod) {
            sum++
        }
        expect(sum).to.be.equal(3)
        Cod.Cod_date()
    });
})