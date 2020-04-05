// function handleChange() {
// 	var cardName = document.getElementById("card-name");
// 	let cardHolder = document.getElementById("card-holder");
// 	cardName.value = cardName.value.toUpperCase();
// 	console.log(cardName.value);
// 	cardHolder.innerHTML = cardName.value;
// }

window.onload = function() {
	const cardName = document.getElementById("card-name");
	const cardHolder = document.getElementById("card-holder");
	const cardNumber = document.getElementById("card-number");
	const nomerCarta = document.querySelector(".nomer-carta");

	const handleChangeName = function(e) {
		cardHolder.innerHTML = e.target.value.toUpperCase();
	};

	cardName.addEventListener("input", handleChangeName);
};
