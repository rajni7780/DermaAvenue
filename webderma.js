let wishlist = [];

function toggleWishlist(button) {
  const productCard = button.closest('.product-card');
  const productName = productCard.querySelector('h3').innerText;

  if (wishlist.includes(productName)) {
    wishlist = wishlist.filter(item => item !== productName);
    button.classList.remove('added');
    button.innerText = '🤍';
  } else {
    wishlist.push(productName);
    button.classList.add('added');
    button.innerText = '❤️';
  }

  console.log("Current Wishlist:", wishlist);
}
