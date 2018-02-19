const expect = require('chai').expect;
const program = require('../src/exercise1');

describe(`${program.title} with another input & output`, function () {

  it('SURPRISE 😅', function () {

    const input1 = [
      { name: 'Rick', money: 400 },
      { name: 'Molly', money: 88 }
    ]
    const input2 = input1
    const output1 = [
      { name: 'Rick', money: 500 },
      { name: 'Molly', money: 188 }
    ]
    const output2 = {
      names: ['Rick', 'Molly'],
      money: 488
    }

    expect(program.transform1(input1)).to.be.eql(output1)
    expect(program.transform2(input2)).to.be.eql(output2)
  });

});