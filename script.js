let score = 20;
let highscore = 0;
let secretNum = Math.floor(Math.random() * 20) + 1;

let buton = document.querySelector('.check');
let inp = document.querySelector('.inputField');

const changeInfo = (text) => {
	document.querySelector('.textG').textContent = text;
}


buton.addEventListener('click', () => {
	let userInp = Number(inp.value);

	if (!userInp){
		changeInfo('Please enter a number!');
	} else if (userInp === secretNum){
		changeInfo('You WON! CONGRATS!');

		document.querySelector('body').style.backgroundColor = "green";
		document.querySelector('.number').style.width = "25rem";
		document.querySelector('.number').textContent = secretNum;

		if(score > highscore){
			highscore = score;
			document.querySelector('.highscoreS').textContent = highscore;
		}
	} else if (userInp !== secretNum) {
		if (score > 1){
			changeInfo(userInp > secretNum ? 'Too big!' : 'Too small!');
			score--;
			document.querySelector('.scoreS').textContent = score;
		}else {
			changeInfo('YOU LOST! Try again!');
			document.querySelector('.scoreS').textContent = 'No score left..';
		}
	} 
});


document.querySelector('.playAgain').addEventListener('click', () => {
	secretNum = Math.floor(Math.random() * 20) + 1;
	document.querySelector('body').style.backgroundColor = "#222";
	document.querySelector('.number').style.width = "15rem";
	document.querySelector('.number').textContent = '?';
	document.querySelector('.textG').textContent = 'Start...';
	inp.value = '';
	score = 20;
	document.querySelector('.scoreS').textContent = score;
});