"use strict";
let problems = require('./../lib/problems');
let expect = require("chai").expect;

describe("Euler project Problems -", function() {
  describe("Sum square difference -", function() {
    it("should return correct result for first ten", () => {
      let result = problems.sumSquareDiff(10);
      expect(result).to.equal(2640);
    });

    it("should return correct result when max is not passed", () => {
      let result = problems.sumSquareDiff();
      expect(result).to.equal(25164150);
    });

    it("should return zero result when null is passed", () => {
      let result = problems.sumSquareDiff(null);
      expect(result).to.equal(0);
    });
  });

  describe("Max Path sum -", function() {
    it("should return correct result for 15 rows", () => {
      let result = problems.maxPathSum();
      expect(result).to.equal(1074);
    });
  });
});
