function create(words) {
   let content = document.getElementById('content');

   words.forEach(word => {
      let div = document.createElement('div')
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none'
      div.addEventListener('click', show)
      div.appendChild(p);
      content.appendChild(div);
   });

   function show(event) {
      event.target.children[0].style.display = 'block';
   }
}
