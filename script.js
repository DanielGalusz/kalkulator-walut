function convertCurrency() {
	let amount = document.querySelector(".calculator__input--js").value;
	const targetCurrency = document.querySelector(".calculator__select--js").value;

	const rates = {
		"EUR": 0.22, 
		"USD": 0.24,
		"GBP": 0.19,
		"CHF": 0.22
	};

	if (amount && targetCurrency && rates[targetCurrency]) {
		var convertedAmount = amount * rates[targetCurrency];
		document.querySelector(".calculator__result").textContent = convertedAmount.toFixed(2) + " " + targetCurrency;
	} else {
		document.querySelector(".calculator__result").textContent = "Wprowadź prawidłową kwotę i wybierz walutę docelową.";
	}
}