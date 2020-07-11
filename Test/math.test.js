var assert = require('assert');
const calculadora = require('../math');

describe('Math', function () {
  describe('Soma', function () {
    it('should return 2 when x=1 and y=1', function () {
      assert.equal(calculadora.soma(1,1), 2);
    });
  });

  describe('Subtração', function () {
    it('should return 5 when x=8 and y=3', function () {
      assert.equal(calculadora.subtracao(8,3), 5);
    });
  });

  describe('Multiplicação', function () {
    it('should return 100 when x=10 and y=10', function () {
      assert.equal(calculadora.multiplicacao(10,10), 100);
    });
  });

  describe('Divisão', function () {
    it('should return 4 when x=8 and y=2', function () {
      assert.equal(calculadora.divisao(8,2), 4);
    });
  });

  describe('Divisão por zero', function () {
    it('should return error message when y=0', function () {
      assert.equal(calculadora.divisao(8,0), "Não é possível dividir por zero.");
    });
  });
});