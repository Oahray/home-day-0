(function(){
  'use strict';

  var chai = require('chai');
  var should = chai.should();

  var aritGeo = require('../app/aritGeo.js');

  describe("Determine the sequence of an array of numbers: ", function() {

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        (aritGeo([])).should.equal(0);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        (aritGeo([2, 4, 6, 8, 10])).should.equal('Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        (aritGeo([5, 11, 17, 23, 29, 35, 41])).should.equal('Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        (aritGeo([15, 10, 5, 0, -5, -10])).should.equal('Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        (aritGeo([2, 6, 18, 54, 162])).should.equal('Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        (aritGeo([0.5, 3.5, 24.5, 171.5])).should.equal('Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        (aritGeo([-128, 64, -32, 16, -8])).should.equal('Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [1, 2, 3, 5, 8]", function() {
        (aritGeo([1, 2, 3, 5, 8])).should.equal(-1);
      });

      it("should return -1 for [1, 3, 6, 10, 15]", function() {
        (aritGeo([1, 3, 6, 10, 15])).should.equal(-1);
      });

      it("should return -1 for [1, 8, 27, 64, 125]", function() {
        (aritGeo([1, 8, 27, 64, 125])).should.equal(-1);
      });
      
    });
    
    describe("Case for a non-array input", function() {
    
      it("should return invalid input for 'Philip'", function() {
        (aritGeo('Philip')).should.equal("Invalid input. Array expected.");
      });
      
      it("should return invalid input for 0", function() {
        (aritGeo(0)).should.equal("Invalid input. Array expected.");
      });
      
      it("should return invalid input for {}", function() {
        (aritGeo({})).should.equal("Invalid input. Array expected.");
      })      
    });
  });
})();