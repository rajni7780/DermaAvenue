<script>
  const ShakeSelect = document.getElementById('ShakeSelect');
  const quantityInput = document.getElementById('quantity');
  const ShakePriceSpan = document.getElementById('ShakePrice');
  const totalAmountSpan = document.getElementById('totalAmount');
  const payBillBtn = document.getElementById('payBillBtn');

  function updatePrices() {
    let selectedOption = ShakeSelect.options[ShakeSelect.selectedIndex];
    let price = parseFloat(selectedOption.getAttribute('data-price')) || 0;
    let quantity = parseInt(quantityInput.value) || 0;

    ShakePriceSpan.textContent = price.toFixed(2);
    let total = price * quantity;
    totalAmountSpan.textContent = total.toFixed(2);
  }

  ShakeSelect.addEventListener('change', updatePrices);
  quantityInput.addEventListener('input', updatePrices);

  payBillBtn.addEventListener('click', () => {
    let selectedShake = ShakeSelect.value;
    if (!selectedShake) {
      alert('Please select a Shake item before paying.');
      return;
    }
    let quantity = parseInt(quantityInput.value);
    if (quantity < 1 || isNaN(quantity)) {
      alert('Please enter a valid quantity.');
      return;
    }
    let total = parseFloat(totalAmountSpan.textContent);
    alert(Thank you for your order!\n\nShake: ${selectedShake}\nQuantity: ${quantity}\nTotal amount to pay: ${total.toFixed(2)});
  });

  // Initialize prices on page load
  updatePrices();
</script></div>