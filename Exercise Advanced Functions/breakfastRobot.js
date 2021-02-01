function solution() {
  let meals = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  let ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let commands = {
    restock: (product, quantity) => {
      ingredients[product] += Number(quantity);
      return "Success";
    },
    prepare: (meal, quantity) => {
      for (let ing in meals[meal]) {
        if (meals[meal][ing] * quantity > ingredients[ing]) {
          return `Error: not enough ${ing} in stock`;
        }
      }

      for (let ing in meals[meal]) {
        ingredients[ing] -= meals[meal][ing] * quantity;
      }
      return "Success";
    },
    report: () => {
      return (str = `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`);
    },

  };
  
  function manager(string) {
    let [command, argument, quantity] = string.split(" ");
    return commands[command](argument, quantity);
  }
  return manager;
}

let manager = solution();
// console.log(manager("restock flavour 50")); // Success
// console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock

// console.log(manager("restock carbohydrate 10"));
// console.log(manager("restock flavour 10"));
// console.log(manager("prepare apple 1"));
// console.log(manager("restock fat 10"));
// console.log(manager("prepare burger 1"));
// console.log(manager("report"));

console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
