document.getElementById('porscheForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value);
    const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value);
    const porscheType = document.querySelector('input[name="porscheType"]:checked').value;
    let porschePrice;
  
    if (porscheType === 'new') {
      porschePrice = 200000;
    } else if (porscheType === 'used') {
      porschePrice = 100000;
    } else {
      porschePrice = parseFloat(document.getElementById('customPrice').value);
    }
  
    const { hoursToBuyPorsche, monthsToBuyPorsche, yearsToBuyPorsche } = calculateTimeToBuyPorsche(monthlyIncome, monthlyExpenses, porschePrice);
    displayResult(hoursToBuyPorsche, monthsToBuyPorsche, yearsToBuyPorsche);
  });
  
  function calculateTimeToBuyPorsche(monthlyIncome, monthlyExpenses, porschePrice) {
    const monthlySavings = monthlyIncome - monthlyExpenses;
    const monthsToBuyPorsche = porschePrice / monthlySavings;
    const hoursToBuyPorsche = monthsToBuyPorsche * 160; // Assuming 40-hour work weeks
    const yearsToBuyPorsche = monthsToBuyPorsche / 12;
    return { hoursToBuyPorsche, monthsToBuyPorsche, yearsToBuyPorsche };
  }
  
  function displayResult(hoursToBuyPorsche, monthsToBuyPorsche, yearsToBuyPorsche) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `<p class="alert alert-primary" role="alert">Du müsstest ${hoursToBuyPorsche.toFixed(2)} Stunden, ${monthsToBuyPorsche.toFixed(2)} Monate oder ${yearsToBuyPorsche.toFixed(2)} Jahre arbeiten, um dir den Porsche zu leisten.</p>`;
  }
  
  document.getElementById('porscheType').addEventListener('change', function() {
    const customPriceInput = document.getElementById('customPriceInput');
    if (this.value === 'custom') {
      customPriceInput.classList.remove('d-none');
    } else {
      customPriceInput.classList.add('d-none');
    }
  });
  
