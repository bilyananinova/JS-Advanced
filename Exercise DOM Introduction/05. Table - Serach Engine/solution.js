function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);
   
   function onClick() {
      let rows = document.querySelectorAll('tbody tr')
      let searchValue = document.getElementById('searchField').value.toLowerCase();

      for(let row of rows) {
         if(searchValue != '' && row.textContent.toLowerCase().includes(searchValue)) {
            row.setAttribute('class', 'select');
         } else {
            row.removeAttribute('class');
         }
      }
      
      document.getElementById('searchField').value = '';
   }

}