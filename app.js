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
};
// 	function addClassFullAttention(e) {
// 		e.classList.toggle('full-attention');
// 	}

// 	const img01 = document.querySelector('.img-01');
// 	const img02 = document.querySelector('.img-02');
// 	const img03 = document.querySelector('.img-03');
// 	const img04 = document.querySelector('.img-04');
// 	const img05 = document.querySelector('.img-05');
// 	const img06 = document.querySelector('.img-06');
// 	const img07 = document.querySelector('.img-07');
// 	const img08 = document.querySelector('.img-08');
// 	const img09 = document.querySelector('.img-09');
// 	const img10 = document.querySelector('.img-10');
// 	const img11 = document.querySelector('.img-11');
// 	const img12 = document.querySelector('.img-12');
// 	const img13 = document.querySelector('.img-13');
// 	const img14 = document.querySelector('.img-14');
// 	const img15 = document.querySelector('.img-15');
// 	const img16 = document.querySelector('.img-16');
// 	const img17 = document.querySelector('.img-17');
// 	const img18 = document.querySelector('.img-18');
// 	const img19 = document.querySelector('.img-19');
// 	const img20 = document.querySelector('.img-20');
// 	const img21 = document.querySelector('.img-21');
// 	const img22 = document.querySelector('.img-22');
// 	const img23 = document.querySelector('.img-23');
// 	const img24 = document.querySelector('.img-24');
// 	const img25 = document.querySelector('.img-25');
// 	const img26 = document.querySelector('.img-26');
// 	const img27 = document.querySelector('.img-27');
// 	const img28 = document.querySelector('.img-28');
// 	const img29 = document.querySelector('.img-29');
// 	const img30 = document.querySelector('.img-30');
// 	const img31 = document.querySelector('.img-31');
// 	const img32 = document.querySelector('.img-32');
// 	const img33 = document.querySelector('.img-33');
// 	const img34 = document.querySelector('.img-34');
// 	const img35 = document.querySelector('.img-35');

// 	img01.addEventListener('click', () => {
// 		addClassFullAttention(img01);
// 	});

// 	img02.addEventListener('click', () => {
// 		addClassFullAttention(img02);
// 	});

// 	img03.addEventListener('click', () => {
// 		addClassFullAttention(img03);
// 	});

// 	img04.addEventListener('click', () => {
// 		addClassFullAttention(img04);
// 	});

// 	img05.addEventListener('click', () => {
// 		addClassFullAttention(img05);
// 	});

// 	img06.addEventListener('click', () => {
// 		addClassFullAttention(img06);
// 	});

// 	img07.addEventListener('click', () => {
// 		addClassFullAttention(img07);
// 	});

// 	img08.addEventListener('click', () => {
// 		addClassFullAttention(img08);
// 	});

// 	img09.addEventListener('click', () => {
// 		addClassFullAttention(img09);
// 	});

// 	img10.addEventListener('click', () => {
// 		addClassFullAttention(img10);
// 	});

// 	img11.addEventListener('click', () => {
// 		addClassFullAttention(img11);
// 	});

// 	img12.addEventListener('click', () => {
// 		addClassFullAttention(img12);
// 	});

// 	img13.addEventListener('click', () => {
// 		addClassFullAttention(img13);
// 	});

// 	img14.addEventListener('click', () => {
// 		addClassFullAttention(img14);
// 	});

// 	img15.addEventListener('click', () => {
// 		addClassFullAttention(img15);
// 	});

// 	img16.addEventListener('click', () => {
// 		addClassFullAttention(img16);
// 	});

// 	img17.addEventListener('click', () => {
// 		addClassFullAttention(img17);
// 	});

// 	img18.addEventListener('click', () => {
// 		addClassFullAttention(img18);
// 	});

// 	img19.addEventListener('click', () => {
// 		addClassFullAttention(img19);
// 	});

// 	img20.addEventListener('click', () => {
// 		addClassFullAttention(img20);
// 	});

// 	img21.addEventListener('click', () => {
// 		addClassFullAttention(img21);
// 	});

// 	img22.addEventListener('click', () => {
// 		addClassFullAttention(img22);
// 	});

// 	img23.addEventListener('click', () => {
// 		addClassFullAttention(img23);
// 	});

// 	img24.addEventListener('click', () => {
// 		addClassFullAttention(img24);
// 	});

// 	img25.addEventListener('click', () => {
// 		addClassFullAttention(img25);
// 	});

// 	img26.addEventListener('click', () => {
// 		addClassFullAttention(img26);
// 	});

// 	img27.addEventListener('click', () => {
// 		addClassFullAttention(img27);
// 	});

// 	img28.addEventListener('click', () => {
// 		addClassFullAttention(img28);
// 	});

// 	img29.addEventListener('click', () => {
// 		addClassFullAttention(img29);
// 	});

// 	img30.addEventListener('click', () => {
// 		addClassFullAttention(img30);
// 	});

// 	img31.addEventListener('click', () => {
// 		addClassFullAttention(img31);
// 	});

// 	img32.addEventListener('click', () => {
// 		addClassFullAttention(img32);
// 	});

// 	img33.addEventListener('click', () => {
// 		addClassFullAttention(img33);
// 	});

// 	img34.addEventListener('click', () => {
// 		addClassFullAttention(img34);
// 	});

// 	img35.addEventListener('click', () => {
// 		addClassFullAttention(img35);
// 	});

// 	img36.addEventListener('click', () => {
// 		addClassFullAttention(img36);
// 	});
// };
