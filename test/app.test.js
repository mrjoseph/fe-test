import app, { TimesTableArray, createGrid } from '../src/app';
describe('app', function() {
  describe('Multiples', () => {
    it('should return a array of objects based on a given number', () => {
      const multiples = new TimesTableArray(10);
      expect(multiples.arrayList.length).toEqual(10);
      expect(multiples.arrayList[0]).toEqual({number: 1, selected: false})
    });
    it('should update selected boolean by multiples of 2', () => {
      const multiples = new TimesTableArray(10);
      const expected = [
        { number: 1, selected: false},
        { number: 2, selected: true},
        { number: 3, selected: false},
        { number: 4, selected: true},
        { number: 5, selected: false},
        { number: 6, selected: true},
        { number: 7, selected: false},
        { number: 8, selected: true},
        { number: 9, selected: false},
        { number: 10, selected: true},
      ]
      multiples.update(2);
      expect(multiples.arrayList).toEqual(expected);
    });

    it('should update selected boolean by multiples of 3', () => {
      const multiples = new TimesTableArray(10);
      const expected = [
        { number: 1, selected: false},
        { number: 2, selected: false},
        { number: 3, selected: true},
        { number: 4, selected: false},
        { number: 5, selected: false},
        { number: 6, selected: true},
        { number: 7, selected: false},
        { number: 8, selected: false},
        { number: 9, selected: true},
        { number: 10, selected: false},
      ];
      multiples.update(3);
      expect(multiples.arrayList).toEqual(expected);
    });

    it('should update the selected boolean ', () => {
      const multiples = new TimesTableArray(144);
      multiples.update(100);
      expect(multiples.arrayList[99]).toEqual( { number: 100, selected: true});
    });

    it('should throw an error if no number is given', () => {
      try {
        new TimesTableArray();
      } catch (error) {
        expect(error.message).toEqual('You need to pass TimesTableArray() a number')
      }
    });

    it('should create a grid of dom elements with given state', () => {
      const state = [
        { number: 1, selected: false},
        { number: 2, selected: false},
        { number: 3, selected: true},
        { number: 4, selected: false},
        { number: 5, selected: false},
        { number: 6, selected: true},
        { number: 7, selected: false},
        { number: 8, selected: false},
        { number: 9, selected: true},
        { number: 10, selected: false},
      ];
      
      document.body.innerHTML = `<div id="div1"></div>`;
      createGrid(state)
      const expected = `<div id="div1"><ul class="table"><li data-id="1" class="unselected"><div>1</div></li><li data-id="2" class="unselected"><div>2</div></li><li data-id="3" class="selected"><div>3</div></li><li data-id="4" class="unselected"><div>4</div></li><li data-id="5" class="unselected"><div>5</div></li><li data-id="6" class="selected"><div>6</div></li><li data-id="7" class="unselected"><div>7</div></li><li data-id="8" class="unselected"><div>8</div></li><li data-id="9" class="selected"><div>9</div></li><li data-id="10" class="unselected"><div>10</div></li></ul></div>`;
      expect(document.body.innerHTML).toEqual(expected);
    });
  });
});
