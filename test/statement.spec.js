import { expect } from "chai"
import { statement } from "../src/statement"
import invoices from "../data/invoices.json"
import plays from "../data/plays.json"

describe('#statement()', function() {
  var invoice, comedyInvoice, tragedyInvoice

  beforeEach(function() {
    invoice = invoices[0],
    comedyInvoice = invoices[1],
    tragedyInvoice = invoices[2]
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
      const myStatement = statement(invoice, plays)
      expect(myStatement).to.equal(expectedResult)
    })
  })

  context('with only a comedy', function() {
    it ('should return the correct amounts', function() {
      const myStatement = statement(comedyInvoice, plays)
      expect(myStatement).to.include('57 seats')
      expect(myStatement).to.include('Amount owed is $666.00')
      expect(myStatement).to.include('You earned 38 credits')
    })
  })

  context('with only a tragedy', function() {
    it ('should return the correct amounts', function() {
      const myStatement = statement(tragedyInvoice, plays)
      expect(myStatement).to.include('13 seats')
      expect(myStatement).to.include('Amount owed is $400.00')
      expect(myStatement).to.include('You earned 0 credits')
    })
  })
});

