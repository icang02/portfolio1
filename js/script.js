const textElement = ['Web Developer', 'Beginner Design'];
let count = 0;
let textIndex = 0;
let currentText = '';
let words = '';

(function tulisan() {

	if(count == textElement.length) {
		count = 0;
	}

	currentText = textElement[count];

	words = currentText.slice(0, ++textIndex);
	document.querySelector('.efekTulisan').textContent = words;

	if(words.length == currentText.length) {
		count++;
		textIndex = 0;
	}

	setTimeout(tulisan, 300);

})();