const currentDate = new Date();
const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
const secondsPassed = (currentDate - startOfYear) / 1000;
const totalSeconds = 31536000;
console.log(secondsPassed);
let percentage = (secondsPassed / totalSeconds) * 100;
console.log(percentage + "%");




function update() {
	var element = document.getElementById("myprogressBar");
	var yearProgressPercentText = document.getElementById("yearProgressPercentText");
	var width = 1;
	var identity = setInterval(scene, 100);

	function scene() {
		if (width >= 100) {
			clearInterval(identity);
		} else {
			//width++;

			const currentDate = new Date();
			const startOfYear = new Date(currentDate.getFullYear(), 0, 1);
			const secondsPassed = (currentDate - startOfYear) / 1000;
			const totalSeconds = 31536000;
			console.log(secondsPassed);
			let percentage = (secondsPassed / totalSeconds) * 100;
			console.log(percentage + "%");


			element.style.width = percentage + '%';
			//element.textContent = element.style.width + '%'; //less precise
			//element.textContent = percentage + '%';

			yearProgressPercentText.textContent = new Date().getFullYear() + " is " + percentage.toPrecision(8) + '% complete!';
		}
	}
}


window.onload = update();