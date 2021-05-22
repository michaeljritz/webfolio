let previousScrollPos;

window.addEventListener('scroll', () => {
	let currentScrollPos = window.pageYOffset;
	if (currentScrollPos > 100) {document.getElementsByTagName('header')[0].classList.add('hide-header');}
	if (currentScrollPos < 100) {document.getElementsByTagName('header')[0].classList.remove('hide-header');}
	if (currentScrollPos < previousScrollPos) {document.getElementsByTagName('header')[0].classList.remove('hide-header');}
	previousScrollPos = currentScrollPos ;
});

window.addEventListener('resize', () => {
	if (window.innerWidth >= 600) {
		document.getElementById('nav-toggle').checked = false;
		document.getElementsByTagName('body')[0].style.overflow = 'scroll';
		document.getElementById('content').classList.remove('blur');
		document.getElementById('freeze').style.display = 'none';
	}
});

let navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', (event) => {
	if (event.target.checked) {
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
		document.getElementById('content').classList.add('blur');
		document.getElementById('freeze').style.display = 'block';
	} else {
		document.getElementsByTagName('body')[0].style.overflow = 'scroll';
		document.getElementById('content').classList.remove('blur');
		document.getElementById('freeze').style.display = 'none';
	}
});