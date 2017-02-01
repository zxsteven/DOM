var button = document.querySelector('button');
var color = document.body.classList;

button.addEventListener('click', function() {
	color.toggle('purple');
});
