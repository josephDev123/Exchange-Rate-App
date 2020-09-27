
//selected DOM
const currency_selected_one = document.getElementById('Currrency_one');
const amount_selected_one = document.getElementById('Currrency_amount_one');

const currency_selected_two = document.getElementById('Currrency_two');
const amount_selected_two = document.getElementById('Currrency_amount_two');

const swap = document.getElementById('swap');
const exchangeRate = document.getElementById('exchangeRate');






function currencyXchnage(){
const currency_one_value = currency_selected_one.value;
const currency_two_value = currency_selected_two.value;

//fetch API
	fetch(`https://v6.exchangerate-api.com/v6/43ce8be447e7f434d91c9669/latest/${currency_one_value}`)
	.then((res)=>{
		return res.json();
	})
	.then((result)=>{
		//console.log(result);
		const xChangeRate = result.conversion_rates[currency_two_value];
		exchangeRate.innerHTML = `1 ${currency_one_value} =  ${xChangeRate} ${currency_two_value} `;

		amount_selected_two.value = amount_selected_one.value * xChangeRate.toFixed(2);
	})
}

//swap
swap.addEventListener('click', ()=>{
	let temp = currency_selected_one.value;
	 currency_selected_one.value = currency_selected_two.value;
	currency_selected_two.value = temp;

currencyXchnage();
})


//event listener
currency_selected_one.addEventListener('change', currencyXchnage);

amount_selected_one.addEventListener('input', currencyXchnage);

currency_selected_two.addEventListener('change', currencyXchnage);


currencyXchnage();