const expect = require('chai').expect;
const bubbleSort = require('../bubblesort');
describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([2, 6, 4])).to.eql([2, 4, 6]);
  });
});
