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
		if (e.target.value === '') {
			input.nextElementSibling.classList.remove('typing');
		} else {
			input.nextElementSibling.classList.add('typing');
		}
	});
});

const formBtn = document.querySelector('.form');

formBtn.addEventListener('submit', (e) => {
	e.preventDefault();
	enviandoFormularioServer();
});

function enviandoFormularioServer() {
	const aEnviar = {
		nombre: document.querySelector('.form__name').value,
		email: document.querySelector('.form__email').value,
		mensaje: document.querySelector('.form__message').value,
	};
	generarToastNotification('Data has been sent to the server.', 'white');

	fetch('https://anki-questions.vercel.app/portafolio', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(aEnviar),
	})
		.then((response) => {
			return response.text();
		})
		.then((data) => {
			generarToastNotification(data, 'green');
		})
		.catch((error) => {
			generarToastNotification('Error adding message to the database', 'green');
			console.error('Error', error);
		});
}

function generarToastNotification(message, color) {
	let toast = document.createElement('div');
	toast.classList.add('notification');
	toast.classList.add(color);
	toast.innerText = message;
	let padre = document.querySelector('.toast');
	padre.appendChild(toast);

	setTimeout(() => {
		toast.remove();
	}, 3000);
}
