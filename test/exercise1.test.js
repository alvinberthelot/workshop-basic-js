const expect = require('chai').expect;
const program = require('../src/exercise1');

describe(`${program.title}`, function () {

  it('Functions transforms', function () {

    const input1 = [
      { name: 'John', money: 200 },
      { name: 'Jane', money: 150 },
      { name: 'Tom', money: 300 }
    ]
    const input2 = input1
    const output1 = [
      { name: 'John', money: 300 },
      { name: 'Jane', money: 250 },
      { name: 'Tom', money: 400 }
    ]
    const output2 = {
      names: ['John', 'Jane', 'Tom'],
      money: 650
    }

    expect(program.transform1(input1)).to.be.eql(output1)
    expect(program.transform2(input2)).to.be.eql(output2)
  });

});