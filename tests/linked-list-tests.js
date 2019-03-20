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
      it('returns false if list is empty', function () {
        expect(list.remove("test")).toEqual(false);
      });
      it('returns false if value is not in list', function () {
        let data = "Aiden";
        list.insert(data);
        expect(list.remove("test")).toEqual(false);
      });
      it('returns true if value is in list', function () {
        let data = "Aiden";
        list.insert(data);
        expect(list.remove(data)).toEqual(true);
        expect(list.size()).toEqual(0);

        list.insert(data);
        let data2 = "Luke";
        list.insert(data2);
        expect(list.remove(data)).toEqual(true);
        expect(list.size()).toEqual(1);
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
