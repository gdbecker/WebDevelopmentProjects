const url = 'https://open.exchangerate-api.com/v6/latest';

const currencyEl_1 = document.getElementById('currency-one');
const currencyEl_2 = document.getElementById('currency-two');
const amountEl_1 = document.getElementById('amount-one');
const amountEl_2 = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
	const currency1 = currencyEl_1.value;
	const currency2 = currencyEl_2.value;

	fetch(`${url}/${currency1}`)
		.then(res => res.json())
		.then(data => {
			const rate = data.rates[currency2];

			rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`;

			amountEl_2.value = (amountEl_1.value * rate).toFixed(2); 
		});
}

// Event listeners
currencyEl_1.addEventListener('change', calculate);
currencyEl_2.addEventListener('change', calculate);
amountEl_1.addEventListener('input', calculate);
amountEl_2.addEventListener('input', calculate);

swap.addEventListener('click', () => {
	const temp = currencyEl_1.value;
	currencyEl_1.value = currencyEl_2.value;
	currencyEl_2.value = temp;
	calculate();
});

calculate();