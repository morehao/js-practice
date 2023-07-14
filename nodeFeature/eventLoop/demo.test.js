const { default: expect } = require('expect');
const m = require('./demo')

test("nextTick output sequence", () => {
    m.nextTickOutputSeq()
});