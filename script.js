document.getElementById('tipForm').addEventListener('input', function() {
    const billTotal = parseFloat(document.getElementById('billTotal').value);
    const tipSlider = parseFloat(document.getElementById('tipSlider').value);

    if (isNaN(billTotal)) {
        alert("Please enter a valid bill amount!");
        return;
    }

    const tipAmount = billTotal * (tipSlider / 100);
    const totalBillWithTip = billTotal + tipAmount;

    document.getElementById('tipPercentage').value = tipSlider.toFixed(2) + "%";
    document.getElementById('tipAmount').value = tipAmount.toFixed(2);
    document.getElementById('totalBillWithTip').value = totalBillWithTip.toFixed(2);
});
