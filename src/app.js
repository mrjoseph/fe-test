export class TimesTableArray {
  constructor(count){
    if(!count) throw new TypeError('You need to pass TimesTableArray() a number')
    this.count = count + 1;
    const list = Array.from(Array(this.count));
    this.arrayList = list.map((_,index) => {
      return {
        'number':index,
        selected: false,
      }
    }).slice(1);
  }
  update(num) {
    const list = Array.from(Array(this.count));
    this.arrayList = list.map((_,index) => ({
          'number':index,
          selected: (index % num  === 0) && true,
        })).slice(1);
  };
}

export const createGrid = (list, num) => {
  // As we are appending to the do lets remove the existing grid first
  const oldTable = document.querySelector('.table');
  if(oldTable) oldTable.remove();

  // create a class based on the selected value in our object
  const addClass = (selected) => (selected)? 'selected' :'unselected';

  // Create the dom nodes and apppend to the document
  const ul = document.createElement("ul");
  list.forEach(({ number, selected}) => {
    const li = document.createElement("li");
    li.setAttribute('data-id', number);
    li.classList.add(addClass(selected));
    const node = document.createTextNode(number);
    
    li.appendChild(node);
    ul.appendChild(li);
    ul.classList.add('table');
    var element = document.getElementById("div1");
    element.appendChild(ul);
  });
};

const app = function() {
  // Create an array of objects with a given number
  const multiples = new TimesTableArray(144);

  // Create a grid of dom elements
  createGrid(multiples.arrayList);

  // Assign a click handler to the document #div1 and to get the clicked element so 
  // we can update the array selected boolean state and recreate our grid with the selected items  
  document.querySelector('#div1').addEventListener('click', (event) => {
    const num = event.target.getAttribute('data-id')
    multiples.update(num);
    createGrid(multiples.arrayList, num);
  })  
};

export default app;
