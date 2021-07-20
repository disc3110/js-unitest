const { TestWatcher } = require('jest');
const stringLength = require('./excersice');
const reverseString = require('./reverse');
const calculator = require('./calculator')
const capitalize = require('./capitalize')

describe('string Length', () => {
  test('String "success" should be 5', () => {
    expect(stringLength('success')).toBe(7);
  }); 

  test('String "success" should not be 8', () => {
    expect(stringLength('success')).not.toBe(8);
  }); 

  test('Empty string should return error', () => {
    expect(() => stringLength('')).toThrow(Error);
  });

  test('Strings with more than 10 characters should return error', () => {
    expect(() => stringLength('supercalifragilistico')).toThrow(Error);
  });
})
  
describe('reverse String', ()=>{
  test('String must be reversed', () => {
    expect(reverseString('diego')).toBe("ogeid");
  });
}) 

describe('calculator', ()=>{
  describe('Addition', () => {
    test('add 2 + 3 should be 5', () => {
      expect(calculator(2,3,"add")).toBe(5);
    });

    test('add 0 + 5 should be 5', () => {
      expect(calculator(0,5,"add")).toBe(5);
    });

    test('Should only recieve numbers', () => {
      expect(() => calculator('a',5,"add")).toThrow(Error);
    })
  });

  describe('Substraction', () => {
    test('substract 5 - 5 should be 0', () => {
      expect(calculator(5,5,"substract")).toBe(0);
    });

    test('substract 10 - 5 should be 5', () => {
      expect(calculator(10,5,"substract")).toBe(5);
    });

    test('Should only recieve numbers', () => {
      expect(() => calculator('a',5,"substract")).toThrow(Error);
    })
  });

  describe('Multiplication', () => {
    test('multiply 5 * 5 should be 25', () => {
      expect(calculator(5,5,"multiply")).toBe(25);
    });

    test('multiply 0 * 5 should be 0', () => {
      expect(calculator(0,5,"multiply")).toBe(0);
    });

    test('Should only recieve numbers', () => {
      expect(() => calculator('a',5,"multiply")).toThrow(Error);
    })
  });

  describe('Division', () => {
    test('divide 5 / 5 should be 1', () => {
      expect(calculator(5,5,"divide")).toBe(1);
    });

    test('divide 5 / 0 should be Error', () => {
      expect(() => calculator(5,0,"divide")).toThrow(Error);
    });

    test('Should only recieve numbers', () => {
      expect(() => calculator(a,5,"divide")).toThrow(Error);
    })
  });
}) 

describe('Capitalize', () => {

  test('Should take a string', () =>{
    expect(() => capitalize(123)).toThrow(Error);});

  test('Should convert the first letter to Capital', () =>{
    expect(capitalize("diego")).toBe("Diego")});
  })
