const buttons = document.querySelectorAll('[data-package]');
buttons.forEach(btn => {
btn.addEventListener('click', (e) => {
e.preventDefault();
const pkg = btn.dataset.package;
alert(`You selected the ${pkg} package. Please contact me for a quote.`);
});
});