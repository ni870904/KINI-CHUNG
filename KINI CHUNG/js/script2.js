
var textWrapper1 = document.querySelector('.ml101 .letters1');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter1'>$&</span>");

anime.timeline({loop: true})
  .add({
	targets: '.ml101 .letter1',
	rotateY: [-90, 0],
	duration: 5000,
	delay: (el, i) => 45 * i
  }).add({
	targets: '.ml101',
	opacity: 0,
	duration: 1000,
	easing: "easeOutExpo",
	delay: 1000
  });






