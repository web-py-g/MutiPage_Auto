var dop = document.querySelector('.command__toggle_dop');

dop.addEventListener("click", dops);

var flag = 0;

function dops(){
	var dop_content = document.querySelector('.dop_content');
	var dop_content_elems = dop_content.querySelectorAll('.pricecontent__item');
	var dop_len = getComputedStyle(dop_content_elems[0]).height;
	var dop_heih = dop_len.slice(0, dop_len.length - 2);
	var dop_calc = (Number(dop_heih) + 20) * dop_content_elems.length;

	if (flag == 0){
		dop_content.style.paddingBottom = dop_calc + 'px';
		flag = 1;
	}
	else{
		dop_content.style.paddingBottom = 0;
		flag = 0;
		for (var i = dop_content_elems.length - 1; i >= 0; i--) {
			if (dop_content_elems[i].classList.contains('open')){
				let funcUser = dops1.bind(dop_content_elems[i]);
				funcUser();
			}
		}
	}	
}

var dop1 = document.querySelector('.dop_content');

var dop1_content = dop1.querySelectorAll('.pricecontent__item');

for (var i = dop1_content.length - 1; i >= 0; i--) {
	dop1_content[i].addEventListener("change", dops1);
}
function dops1(){
	var dop_content = document.querySelector('.dop_content');
	var dop_pad = dop_content.style.paddingBottom;
	if (this.classList.contains('open')){
		var ull = this.querySelector('.pricecontent__item_main');
		var ull_h = Number((ull.style.paddingBottom).slice(0, (ull.style.paddingBottom).length - 2));
		dop_content.style.paddingBottom = (Number(dop_pad.slice(0, dop_pad.length - 2)) - ull_h) + 'px';
		this.classList.remove('open');
		ull.style.paddingBottom = 0;
		ull.style.paddingTop = 0;
		var check = this.getElementsByTagName('input')[0];
		if (check.checked){
			check.checked = false;
		}

	}
	else{
		var ull = this.querySelector('.pricecontent__item_main');
		var li = ull.firstElementChild.clientHeight;
		var lis = ull.children.length;
		if (window.innerWidth < 400){
			if (li < 26){
				li += 10;
			}
			else if (li > 100){
				li = 60;
			}
			else if (li > 60){
				li = 40;
			}
			if (lis > 8) {
				li -= 11;
			}
		}
		else{

			if (li < 26){
				li += 15;
			}
			else if (li > 100){
				li = 65;
			}
			else if (li > 50){
				li = 60;
			}
		}

		ull.style.paddingBottom = ((li + 10) * lis) + 'px';
		var ull_h = Number((ull.style.paddingBottom).slice(0, (ull.style.paddingBottom).length - 2));
		dop_content.style.paddingBottom = (Number(dop_pad.slice(0, dop_pad.length - 2)) + ull_h) + 'px';
		this.classList.add('open');
	}
}

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(time,start,target,dur) {
            time /= dur / 2;
            if (time < 1) return target / 2 * time * time + start;
            time--;
            return -target / 2 * (time * (time - 2) - 1) + start;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());



const form = document.querySelector('.form');
const number = '79119226661';
function sendToWhatsapp(text, phone) {
 
  text = encodeURIComponent(text);
  let url = `https://wa.me/79119226661?text=Здравствуйте,%20меня%20зовут%20${text},%20я%20хочу%20оставить%20заявку%20на%20бесплатную%20консультацию.&source=&data=`;
  window.open(url);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const text = e.currentTarget.querySelector('input').value;
  sendToWhatsapp(text, number);
});