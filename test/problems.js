"use strict";
let rewire = require('rewire');
let problems = rewire('./../lib/problems');
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

  describe("Lychrel numbers -", function() {
    it("should return 0 result for 10", () => {
      let result = problems.countLychrelNumbers(10);
      expect(result).to.equal(0);
    });

    it("should return 0 result for 100", () => {
      let result = problems.countLychrelNumbers(100);
      expect(result).to.equal(0);
    });

    it("should return 1 result for 200", () => {
      let result = problems.countLychrelNumbers(200);
      expect(result).to.equal(1);
    });
  });

  describe("isPalindromic -", function() {
    it("should return true for palindromic numbers", () => {
      let isPalindromic = problems.__get__("isPalindromic");
      let result = isPalindromic(1);
      expect(result).to.equal(true);

      result = isPalindromic(222);
      expect(result).to.equal(true);

      result = isPalindromic(4444);
      expect(result).to.equal(true);
    });

    it("should return false for palindromic numbers", () => {
      let isPalindromic = problems.__get__("isPalindromic");
      let result = isPalindromic(47);
      expect(result).to.equal(false);

      result = isPalindromic(123);
      expect(result).to.equal(false);;
    });
  });

  describe("isLychrel -", function() {
    it("should return true for Lychrel numbers", () => {
      let isLychrel = problems.__get__("isLychrel");
      let result = isLychrel(196);
      expect(result).to.equal(true);
    });

    it("should return false for Lychrel numbers", () => {
      let isLychrel = problems.__get__("isLychrel");
      let result = isLychrel(47);
      expect(result).to.equal(false);

      result = isLychrel(349);
      expect(result).to.equal(false);;
    });
  });
});
