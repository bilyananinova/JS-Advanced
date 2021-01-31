function listProcessor(arr) {
  let result = [];

  let obj = {
    add: (string) => {
      result.push(string);
    },
    remove: (string) => {
      while (result.includes(string)) {
        result.splice(result.indexOf(string), 1);
      }
    },
    print: () => {
      console.log(result.join(","));
    },
  };

  arr.forEach((element) => {
    let [command, string] = element.split(" ");
    obj[command](string);
  });
}

listProcessor(["add hello", "add again", "remove hello", "add again", "print"]);
listProcessor([
  "add pesho",
  "add george",
  "add peter",
  "remove peter",
  "print",
]);
