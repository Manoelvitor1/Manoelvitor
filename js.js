function calculateTip() {
    var billAmount = parseFloat(document.getElementById('billAmount').value);
    var tipPercentage = parseInt(document.getElementById('tipPercentage').value);
    var numPeople = parseInt(document.getElementById('numPeople').value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPeople) || billAmount <= 0 || numPeople <= 0) {
        alert("Por favor, preencha todos os campos com valores válidos.");
        return;
    }

    var totalTip = (billAmount * tipPercentage) / 100;
    var totalAmount = billAmount + totalTip;
    var tipPerPerson = totalTip / numPeople;
    var totalPerPerson = totalAmount / numPeople;

    var resultsTable = "<table><tr><th>Pessoa</th><th>Total da Conta</th><th>Gorjeta</th><th>Total por Pessoa</th></tr>";

    for (var i = 1; i <= numPeople; i++) {
        var individualTotal = totalPerPerson + ((i === numPeople) ? totalTip % numPeople : 0);
        resultsTable += "<tr><td>" + i + "</td><td>R$ " + totalPerPerson.toFixed(2) + "</td><td>R$ " + tipPerPerson.toFixed(2) + "</td><td>R$ " + individualTotal.toFixed(2) + "</td></tr>";
    }

    resultsTable += "</table>";

    document.getElementById('results').innerHTML = resultsTable;

    var table = document.querySelector('table');
    table.style.marginTop = '20px';
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';

    var thTd = document.querySelectorAll('th, td');
    for (var j = 0; j < thTd.length; j++) {
        thTd[j].style.border = '1px solid #ccc';
        thTd[j].style.padding = '10px';
        thTd[j].style.textAlign = 'center';
    }
}
window.onload = function() {
    var element = document.getElementById("myElement");
    element.classList.add("fade-in");
}
