
var textWrapper2 = document.querySelector('.ml102 .letters2');
textWrapper2.innerHTML = textWrapper2.textContent.replace(/\S/g, "<span class='letter2'>$&</span>");

anime.timeline({loop: true})
  .add({
	targets: '.ml102 .letter2',
	rotateY: [-90, 0],
	duration: 5000,
	delay: (el, i) => 45 * i
  }).add({
	targets: '.ml102',
	opacity: 0,
	duration: 1000,
	easing: "easeOutExpo",
	delay: 1000
  });






