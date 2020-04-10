

window.onload = function() {
	const cardName = document.getElementById("card-name");
	const cardHolder = document.getElementById("card-holder");
	const cardNumber = document.getElementById("card-number");
	const nomerCarta = document.querySelector(".nomer-carta");
	const cvv = document.querySelector(".cvv-number");
	const cardCVV = document.getElementById("card-cvv");

	const handleChangeName = function(e) {
		cardHolder.innerHTML = e.target.value.toUpperCase();
	};

	const handleChangeCVV = function(e) {
		cvv.innerHTML = e.target.value;
	};

	const handleChangeNumber = function(e) {
		nomerCarta.innerHTML = e.target.value;

		if (cardNumber.value.match(/^(?:3[47][0-9]{13})$/)) {
			//American Express 344564645454666
			document.getElementById("AE").style.display = "block";
		} else if (cardNumber.value.match(/^(?:5[1-5][0-9]{14})$/)) {
			//Master CArd 5123234442342341
			document.getElementById("mastercard").style.display = "block";
		} else if (
			cardNumber.value.match(/^(?:3(?:0[0-5]|[68][0-9])[0-9]{11})$/)
		) {
			//Diners Club
			document.getElementById("DC").style.display = "block";
		} else if (cardNumber.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/)) {
			//Visa 4034434534553
			document.getElementById("visa").style.display = "block";
		} else if (
			cardNumber.value.match(/^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/)
		) {
			//Discover 6011345334345553
			document.getElementById("discover").style.display = "block";
		} else {
			document.getElementById("devil").style.display = "block";
		}
	};

	cardName.addEventListener("input", handleChangeName);
	cardNumber.addEventListener("input", handleChangeNumber);
	cardCVV.addEventListener("input", handleChangeCVV);

	
};
