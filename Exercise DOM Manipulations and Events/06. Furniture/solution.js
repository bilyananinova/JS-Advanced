function solve() {
  let tbody = document.querySelector('tbody');
  let textareas = document.getElementsByTagName('textarea');
  let buyArea = textareas[1];
  let btns = document.getElementsByTagName('button');
  btns[0].addEventListener('click', (ev) => {
    JSON.parse(textareas[0].value).forEach(element => {
      let tr = document.createElement('tr');

      let tdImg = document.createElement('td');
      let img = document.createElement('img');
      img.setAttribute('src', element.img);
      tdImg.appendChild(img);
      tr.appendChild(tdImg);

      let tdName = document.createElement('td');
      let pName = document.createElement('p');
      pName.textContent = element.name;
      tdName.appendChild(pName);
      tr.appendChild(tdName);

      let tdPrice = document.createElement('td');
      let pPrice = document.createElement('p');
      pPrice.textContent = element.price;
      tdPrice.appendChild(pPrice);
      tr.appendChild(tdPrice);

      let tdFactor = document.createElement('td');
      let pFactor = document.createElement('p');
      pFactor.textContent = element.decFactor;
      tdFactor.appendChild(pFactor);
      tr.appendChild(tdFactor);

      let tdCheck = document.createElement('td');
      let check = document.createElement('input');
      check.setAttribute('type', 'checkbox');
      tdCheck.appendChild(check);
      tr.appendChild(tdCheck);

      tbody.appendChild(tr);
    });
  });
  btns[1].addEventListener('click', (ev) => {
    let buyList = Array.from(tbody.querySelectorAll('input[type=checkbox]:checked'))
      .map(el => el.parentNode.parentNode)

    let result = {
      bought: [],
      totalPrice: 0,
      sumDecFactor: 0
    }

    buyList.forEach(row => {
      let tds = row.children;
      let name = tds[1].children[0].textContent
      result.bought.push(name)
      result.totalPrice += Number(tds[2].children[0].textContent)
      result.sumDecFactor += Number(tds[3].children[0].textContent)
    })

    buyArea.value = 
    `Bought furniture: ${result.bought.join(', ')}\nTotal price: ${result.totalPrice.toFixed(2)}\nAverage decoration factor: ${result.sumDecFactor / result.bought.length}`

  });

}