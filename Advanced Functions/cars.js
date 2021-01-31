function cars(array) {
  let carBuilder = () => {
    let cars = {};

    return {
      create: (name, inherit, parent) => {
        inherit ? cars[name] = Object.create(cars[parent]) : (cars[name] = {});
      },
      set: (name, key, value) => (cars[name][key] = value),
      print: (name) => {
      let result = []
        for (let key in cars[name]) {
          result.push(`${key}:${cars[name][key]}`)
        }
        console.log(result.join(', '))
      },
    };
  };

  let carFactory = carBuilder();

  array.forEach((element) => {
    let [command, ...params] = element.split(" ");
    carFactory[command].apply(null, params);
  });
}

cars([
  "create c1",
  "create c2 inherit c1",
  "set c1 color red",
  "set c2 model new",
  "print c1",
  "print c2",
]);
