document.addEventListener('DOMContentLoaded', function () {
	if (window.AOS) {
		AOS.init({ duration: 600, once: true, easing: 'ease-out-cubic' });
	}
	var el = document.getElementById('typewriter');
	if (!el) return;
	var text = el.getAttribute('data-text') || '';
	var speed = 45;
	el.textContent = '';
	var i = 0;
	function type() {
		if (i < text.length) {
			el.textContent += text.charAt(i);
			i += 1;
			setTimeout(type, speed);
		}
	}
	type();
});
