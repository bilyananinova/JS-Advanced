function solve() {

  let text = document.getElementById('text').value.toLowerCase().split(' ')
  let type = document.getElementById('naming-convention').value;
  let result = [];
  if (type == 'Camel Case') {

    text.forEach((element, index) => {
      let word = element
      if (index != 0) {
        word = element[0].toUpperCase() + element.slice(1);
      }
      result.push(word);
    });

  } else if (type == 'Pascal Case') {
    text.forEach(element => {

      let word = element[0].toUpperCase() + element.slice(1);
      result.push(word);
    });
  } else {
    result.push('Error!')
  }

  document.getElementById('result').textContent = result.join('')
}