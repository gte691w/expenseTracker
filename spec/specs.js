describe("Purchase", function() {
  describe("totalCost", function() {
    it("calculates the total cost", function() {
      var testTotalCost = Object.create(Purchase);
      testTotalCost.totalCost(2,3);
      testTotalCost.totalPrice.should.equal(6);
    });
  });
});