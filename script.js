const textarea = document.querySelector('.textarea-form');
const inputs = document.querySelectorAll('.input-form');

textarea.addEventListener('input', (e) => {
	console.log('textarea');
	if (e.target.value === '') {
		textarea.nextElementSibling.classList.remove('typing');
	} else {
		textarea.nextElementSibling.classList.add('typing');
	}
});

inputs.forEach((input) => {
	input.addEventListener('input', (e) => {
		console.log(e.target.value);
		if (e.target.value === '') {
			input.nextElementSibling.classList.remove('typing');
		} else {
			input.nextElementSibling.classList.add('typing');
		}
	});
});

const formBtn = document.querySelector('form__contact-button');

formBtn.addEventListener('submit', (e) => {
	e.preventDefault();
});
