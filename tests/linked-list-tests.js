const expect = require("expect");
const LinkedList = require('../src/linked-list').LinkedList;

describe('LinkedList', function () {
    let list;
  
    beforeEach(function () {
      list = new LinkedList();
    });
  
    describe('insert', function () {
      it('should have no items after no insert', function() {
        expect(list.size()).toEqual(0);
      });
      it('should have one item after insert', function () {
        const data = "Aiden";
        list.insert(data);
        expect(list.size()).toEqual(1);

        const data2 = "Luke";
        list.insert(data2);
        expect(list.size()).toEqual(2);
      });
    });

    describe('remove', function () {
      it('should something', function () {
        // add stuff
        // expect list size to decrement
        // expect list to NOT contain data
      });
    });

    describe('contains', function () {
      it('should return false if the list is empty', function(){
        expect(list.contains("test")).toEqual(false);
      });
      it('should return true if object is in the list', function () {
        // add stuff
        const data = "Aiden";
        list.insert(data);
        const data2 = "Luke";
        list.insert(data2);

        // expect list to contain data added
        expect(list.contains(data)).toEqual(true);
        expect(list.contains(data2)).toEqual(true);

        // expect list to NOT contain data NOT added
        expect(list.contains("NotInList")).toEqual(false);
      });
    });

    describe('size', function () {
      it('should something', function () {
        // add stuff
        // expect size to be accurate
      });
    });

    describe('toString', function () {
      it('should something', function () {
        // add stuff
        // expect toString to concat data ["a","b","c"] to string "a,b,c (3)"
      });
    });

  })
