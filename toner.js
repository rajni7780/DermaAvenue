let total = 0;

function addToCart(productName, price) {
  const cartItems = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');

  // Create a list item for the cart
  const li = document.createElement('li');
  li.textContent = ${productName} - $${price};
  cartItems.appendChild(li);

  // Update total
  total += price;
  totalDisplay.textContent = total.toFixed(2);
}