function solve() {

  let text = document.getElementById('input').value;
  text = text.split('.').filter((x) => x != '');
  let output = document.getElementById('output')

  while (text.length > 0) {
    output.innerHTML += `<p>${text.splice(0, 3).join('.')}.</p>`
  }

}