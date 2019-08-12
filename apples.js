
function totalNumberSold(applesSoldList) {
	var applesSold = 0;
	for (var i = 0; i < applesSoldList.length; i++) {
		applesSold += applesSoldList[i].qty
	}
	return applesSold;
}

function totalIncome(applesSoldList) {
	var income = 0;
	for (var i = 0; i < applesSoldList.length; i++) {
		income += applesSoldList[i].price
	}
	return income;

}

function totalIncomeGreenApples(applesSoldList) {
	var apples = [];
	var greenIncome = 0;
	for (var i = 0; i < applesSoldList.length; i++) {
		var green = applesSoldList[i];
		if (green.color === "green") {
			apples.push(green.price);
			// for (var i = 0; i < apples.length; i++){
			greenIncome += green.price;
		}

	}

	console.log(greenIncome)
	return greenIncome.toFixed(2);
}

function totalProfit(applesSoldList, applePriceMap) {
	var total = 0;
	for (var i = 0; i < applesSoldList.length; i++) {
		applePriceMap = applesSoldList[i];
		total += applePriceMap.price;

	}
	return total;
}

// -- extra functions...

function totalPerColorSold(apples, color) {
	var apples = [];
	var colorIncome = 0;
	for (var i = 0; i < apples.length; i++) {
		var green = apples[i];
		if (color.color === "green") {
			apples.push(green.price);
			// for (var i = 0; i < apples.length; i++){
			greenIncome += green.price;
		}

	}

	console.log(greenIncome)
	return greenIncome.toFixed(2);

	return 0;
}

function totalIncomePerColor(apples, color) {
	return 0;
}

function totalProfitPerColor(apples, color, costMap) {
	return 0;
}

function mostProfitableColor(apples, color, costMap) {
	return 0;
}