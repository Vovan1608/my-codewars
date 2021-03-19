/* 
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
Examples:
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar
*/

function cakes(recipe, available) {
  let possibility = Number.MAX_SAFE_INTEGER;

  for (let item in recipe) {
    if (item in available) {
      const temp = Math.floor(available[item] / recipe[item]);
      console.log(temp);
      possibility = possibility > temp ? temp : possibility;
    } else {
      return 0;
    }
  }

  return possibility;
}

// const recipe = { flour: 500, sugar: 200, eggs: 1 };
// const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

const recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
const available = { sugar: 500, flour: 2000, milk: 2000 };
const res = cakes(recipe, available);

const add = document.querySelector("#add");

const el = document.createElement("div");
el.innerText = res;
el.style = `
	background: #61dafb;
	font-size: 36px;
	text-align: center;
	border: 1px solid black
`;

add.append(el);
