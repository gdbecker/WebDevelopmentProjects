const nav = document.querySelector('.nav');
const links = document.querySelectorAll('.link');

window.addEventListener('scroll', fixNav);

links.forEach((link, idx1) => {
	link.addEventListener('click', () => {
		links.forEach((link, idx2) => {
			if (idx1 === idx2) {
				link.classList.add('current');
			} else {
				link.classList.remove('current');
			}
		})
	});
});

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 150) {
		nav.classList.add('active');
	} else {
		nav.classList.remove('active');
	}
}