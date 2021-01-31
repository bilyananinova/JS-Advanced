function filterEmployees(input, criteria) {
  let data = JSON.parse(input);
  let [key, value] = criteria.split("-");
  let result = data
    .filter((e) => filter(e))
    .forEach((e, i) => {
      console.log(`${i}. ${e.first_name} ${e.last_name} - ${e.email}`);
    });

  function filter(data) {
    return value != "all" ? data[key] == value : (key = "all");
  }
}

filterEmployees(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
