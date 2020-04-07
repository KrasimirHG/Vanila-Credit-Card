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

	const handleChangeNumber = function(e) {
		nomerCarta.innerHTML = e.target.value;

		var cardNo = /^(?:3[47][0-9]{13})$/;
		const vidKarta = document.getElementById("vid-carta");
		console.log(vidKarta);
		if(cardNumber.value.match(cardNo)) {
			// vidKarta.style = "border:none;"
			// vidKarta.innerHTML="";
			document.getElementById("AE").style.display = "block"
		}
		else {
			vidKarta.innerHTML = "BBBBB"
		}
	}
	

	cardName.addEventListener("input", handleChangeName);
	cardNumber.addEventListener("input",handleChangeNumber);

	// function numberChecker() {
	// 	var cardNo = /^(?:3[47][0-9]{13})$/;
	// 	if(cardNumber.value.match(cardNo)) {
	// 		document.querySelector(".vid-karta").innerHTML = "AE"
	// 	}
	// 	else document.querySelector(".vid-karta").innerHTML = "BBBBB"
	// }
};
