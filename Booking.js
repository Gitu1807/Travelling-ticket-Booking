document.addEventListener('DOMContentLoaded', function () {
    const priceInput = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');
    const totalAmountSpan = document.getElementById('totalAmount');

    const updateTotalAmount = () => {
        const price = parseFloat(priceInput.value) || 0;
        const quantity = parseInt(quantityInput.value) || 0;
        const totalAmount = price * quantity;

        totalAmountSpan.textContent = totalAmount.toFixed(2);
    };

    priceInput.addEventListener('input', updateTotalAmount);
    quantityInput.addEventListener('input', updateTotalAmount);
});
