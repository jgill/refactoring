import { expect } from "chai"
import { statement } from "../src/statement"
import invoices from "../data/invoices.json"
import plays from "../data/plays.json"

describe('#statement()', function() {
  var invoice;

  beforeEach(function() {
    invoice = invoices[0];
  });

  context('with valid invoice and play', function() {
    it('should return a valid statement', function() {
      const expectedResult = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $490.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,640.00
You earned 47 credits
`
      const myStatement = statement(invoice, plays);
      expect(myStatement).to.equal(expectedResult)
    })
  })
});

