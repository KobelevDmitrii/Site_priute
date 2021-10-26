$(function () {
	$(window).scroll(function() {
	    $('.cart').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
		$('.mailing').each(function(){
			var imagePos2 = $(this).offset().top;

			var topOfWindow2 = $(window).scrollTop();
			if (imagePos2 < topOfWindow2+1100) {
				$(this).addClass("fadeInLeft");
			}
		});
	});
})

const cart = document.querySelector('.cartFlex');
const content = document.querySelectorAll('.countentCart');
const prev = document.querySelector('.countentCartFlex');
const btn = document.querySelector('.btn__flex');

cart.addEventListener('click', e => {
    const curCart = e.target.dataset.cart;
	btn.classList.add('animated');
	btn.classList.add('fadeInDown');
    for(let i = 0; i < content.length; i++){
        content[i].classList.remove('active');
        if (content[i].dataset.countent === curCart){
            content[i].classList.add('active');
			content[i].classList.add('animated');
			content[i].classList.add('fadeInDown');
        }
    }
})

for(let i = 0; i < content.length; i++){
	content[i].children[0].children[1].addEventListener('click', () => {
		content[i].classList.add('fadeOutUp');
		btn.classList.add('animated');
		btn.classList.add('fadeOutUp');
		setTimeout(() => {
			btn.classList.remove('animated');
			btn.classList.remove('fadeOutUp');
			btn.classList.remove('fadeInDown');
			content[i].classList.remove('active');
			content[i].classList.remove('animated');
			content[i].classList.remove('fadeInDown');
			content[i].classList.remove('fadeOutUp');
		},700)
	})
}

