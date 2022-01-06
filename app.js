window.onload = function () {
	const nav = document.querySelector('.primary-navigation');
	const navToggle = document.querySelector('.mobile-nav-toggle');

	// when someone clicks the hamburger button
	navToggle.addEventListener('click', () => {
		const visibility = nav.getAttribute('data-visible');
		if (visibility === 'false') {
			nav.setAttribute('data-visible', true);
			navToggle.setAttribute('aria-expanded', true);
			document.body.style.overflow = 'hidden';
		} else {
			nav.setAttribute('data-visible', false);
			navToggle.setAttribute('aria-expanded', false);
			document.body.style.overflow = 'auto';
		}
	});

	function test(e) {
		e.classList.toggle('full-attention');
	}

	const img1 = document.querySelector('.img-1');
	const img2 = document.querySelector('.img-2');
	const img3 = document.querySelector('.img-3');

	img1.addEventListener('click', () => {
		test(img1);
	});

	img2.addEventListener('click', () => {
		test(img2);
	});

	img3.addEventListener('click', () => {
		test(img3);
	});
};
