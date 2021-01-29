function solve() {

  let text = document.getElementById('text').value.toLowerCase().split(' ')
  let type = document.getElementById('naming-convention').value;
  let result = '';
  if (type == 'Camel Case') {

    text.forEach((element, index) => {
      if (index != 0) {
        result += element[0].toUpperCase() + element.slice(1);
      } else {
        result += element;
      }
    });

  } else if (type == 'Pascal Case') {
    text.forEach(element => {

      result += element[0].toUpperCase() + element.slice(1);

    });
  } else {
    result = 'Error!'
  }

  document.getElementById('result').textContent = result
}
