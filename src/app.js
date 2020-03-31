// source goes here

// build an array containing numbers from 1 > 144

// Build a list of dom elements from array

// Assign a click event to each element

export class Multiples {
  constructor(count){
    this.count = count + 1;
    const list = Array.from(Array(this.count));
    this.arrayList = list.map((_,index) => {
      return {
        'number':index,
        selected: false,
      }
    }).slice(1);
  }
  init (){
    return this.arrayList;
  }

  update(num) {
    const list = Array.from(Array(this.count));
    this.arrayList = list.map((_,index) => {
      if(index % num  === 0) {
        return {
          'number':index,
          selected: true,
        }
      }
          return {
          'number':index,
          selected: false,
        }
    }).slice(1);
  };
}

const createTable = (list) => {
  const addClass = (selected) => (selected)? 'selected' :'unselected';

  var ul = document.createElement("ul");
  list.forEach(({ number, selected}) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    li.classList.add(addClass(selected));
    const node = document.createTextNode(number);
    
    div.appendChild(node);
    li.appendChild(div);
    ul.appendChild(li);
    ul.classList.add('table');
    var element = document.getElementById("div1");
  element.appendChild(ul);
  });
  
};
const app = function() {
  const multiples = new Multiples(144);
  const list  = multiples.arrayList;
  createTable(list); 

};

export default app;
