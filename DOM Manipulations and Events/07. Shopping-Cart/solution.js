function solve() {
   document.querySelector('.shopping-cart').addEventListener('click', add);
   document.querySelector('.checkout').addEventListener('click', total);
   let textArea = document.querySelector('textarea');

   let cart = {};

   function add(event) {
      if (event.target.className == 'add-product') {
         let productDiv = event.target.parentNode.parentNode;
         let product = productDiv.querySelector('.product-title').textContent
         let price = Number(productDiv.querySelector('.product-line-price').textContent)

         textArea.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`

         if (!cart[product]) { cart[product] = 0; }

         cart[product] += price;

      }

   }

   function total() {
      let list = [];
      let totalPrice = 0;
      for (let product in cart) {
         list.push(product);
         totalPrice += cart[product];
      }

      textArea.value += `You bought ${list.join(', ')} for ${totalPrice.toFixed(2)}.\n`;
   }

}