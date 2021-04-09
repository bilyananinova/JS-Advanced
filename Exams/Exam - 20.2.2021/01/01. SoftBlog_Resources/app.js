function solve() {
   let siteContent = document.querySelector('.site-content');
   let postSection = siteContent.querySelector('section');
   let creator = document.getElementById('creator');
   let title = document.getElementById('title');
   let category = document.getElementById('category');
   let content = document.getElementById('content');
   let createBtn = document.querySelector('.btn.create');

   createBtn.addEventListener('click', addArticle);

   function addArticle(ev) {
      ev.preventDefault();

      let article = create('article');
      let h1 = create('h1', '', `${title.value}`);
      let pCategory = create('p');
      pCategory.innerHTML = `Category:<strong>${category.value}</strong>`;
      let pCreator = create('p');
      pCreator.innerHTML = `Creator:<strong>${creator.value}</strong>`;
      let p = create('p', '', `${content.value}`);
      let divBtns = create('div', ['class=buttons']);
      let delBtn = create('button', ['class=btn delete'], 'Delete');
      let archBtn = create('button', ['class=btn archive'], 'Archive');

      divBtns.appendChild(delBtn);
      divBtns.appendChild(archBtn);

      article.appendChild(h1);
      article.appendChild(pCategory);
      article.appendChild(pCreator);
      article.appendChild(p);
      article.appendChild(divBtns);

      postSection.appendChild(article);

      delBtn.addEventListener('click', () => {
         article.remove();
      })

      archBtn.addEventListener('click', (ev) => {
         let liContent = ev.target.parentNode.parentNode.querySelector('h1').textContent;
         article.remove();
         let ol = document.querySelector('.archive-section > ol');
         let li = create('li', '', `${liContent}`);
         ol.appendChild(li);

         sort(ol);
      })

      creator.value = '';
      title.value = '';
      category.value = '';
      content.value = '';

   }

   function sort(ol) {
      Array.from(ol.getElementsByTagName("LI"))
         .sort((a, b) => a.textContent.localeCompare(b.textContent))
         .forEach(li => ol.appendChild(li));
   }


   function create(type, attributes, content) {
      let element = document.createElement(type);

      if (attributes) {
         while (attributes.length) {
            let [type, value] = attributes.shift().split('=');
            element.setAttribute(type, value);
         }
      }

      if (content) {
         element.innerHTML = content;
      }

      return element;
   }

}