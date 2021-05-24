let previousScrollPos;

window.addEventListener('scroll', () => {
	let currentScrollPos = window.pageYOffset;

	if (currentScrollPos > 50) {
		document.getElementsByTagName('header')[0].classList.add('hide-header');
		document.getElementsByTagName('header')[0].style.paddingTop = '10px';
	} else {
		document.getElementsByTagName('header')[0].classList.remove('hide-header');
		document.getElementsByTagName('header')[0].style.paddingTop = '25px';
	}

	if (currentScrollPos < previousScrollPos) document.getElementsByTagName('header')[0].classList.remove('hide-header');
	previousScrollPos = currentScrollPos ;

});

window.addEventListener('resize', () => {
	if (window.innerWidth >= 768) {
		document.getElementById('nav-toggle').checked = false;
		document.getElementsByTagName('body')[0].style.overflow = 'scroll';
		document.getElementById('content').classList.remove('blur');
		document.getElementById('content-cover').style.display = 'none';
	}
});

document.getElementById('nav-toggle').addEventListener('click', (event) => {
	if (event.target.checked) {
		document.getElementsByTagName('body')[0].style.overflow = 'hidden';
		document.getElementById('content').classList.add('blur');
		document.getElementById('content-cover').style.display = 'block';
	} else {
		document.getElementsByTagName('body')[0].style.overflow = 'scroll';
		document.getElementById('content').classList.remove('blur');
		document.getElementById('content-cover').style.display = 'none';
	}
});