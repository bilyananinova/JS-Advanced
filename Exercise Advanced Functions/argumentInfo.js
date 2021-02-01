function argumentInfo() {
  let types = {};

  for (const argument of arguments) {
    console.log(`${typeof argument}: ${argument}`);
    if (!types[typeof argument]) {
      types[typeof argument] = 0;
    }

    types[typeof argument] += 1;
  }

  let sort = Object.entries(types).sort((a, b) => b[1] - a[1]);
  [...sort].forEach(element => {
      console.log(`${element[0]} = ${element[1]}`);
  });
}

argumentInfo(
  "cat",
  42,
  function () {
    console.log("Hello world!");
  }
);
console.log(`-`.repeat(40));
argumentInfo({ name: "bob" }, { name: "pesho" }, 3.333, 9.999, "dog");
