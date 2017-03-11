(function() {
  'use strict';

  var findMinMax = require('../app/findMinMax.js');
  
  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [14, 116] for [62, 40, 15, 72, 116, 112, 14]', function () {
        expect(findMinMax([62, 40, 15, 72, 116, 112, 14])).toEqual([14, 16]);
      });

      it('should return [0, 61] for [60, 61, 54, 0, 4]', function () {
        expect(findMinMax([60, 61, 54, 0, 4])).toEqual([0, 61]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

      it('should return [41] for [41, 41]', function () {
        expect(findMinMax([41, 41])).toEqual([41]);
      });

      it('should return [0] for [0, 0, 0, 0, 0, 0]', function () {
        expect(findMinMax([0, 0, 0, 0, 0, 0])).toEqual([0]);
      });

    });

    describe('Return error when the input is not an array', function () {

      it('should return "Invalid input. Only strings accepted" for "Temilaj"', function () {
        expect(findMinMax("Temilaj")).toEqual("Invalid input. Only strings accepted");
      });

      it('should return "Invalid input. Only strings accepted" for 33', function () {
        expect(findMinMax(33)).toEqual(["Invalid input. Only strings accepted"]);
      });

      it('should return "Invalid input. Only strings accepted" for 24', function () {
        expect(findMinMax(24).toEqual("Invalid input. Only strings accepted");
      });

    });

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [14, 116] for [62, 40, 15, 72, 116, 112, 14]', function () {
        expect(findMinMax([62, 40, 15, 72, 116, 112, 14])).toEqual([14, 16]);
      });

      it('should return [0, 61] for [60, 61, 54, 0, 4]', function () {
        expect(findMinMax([60, 61, 54, 0, 4])).toEqual([0, 61]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

    });

    describe('Return an empty array for empty array input', function () {

      it('should return [] for []', function () {
        expect(findMinMax([])).toEqual([]);
      });

    });

  });

})();