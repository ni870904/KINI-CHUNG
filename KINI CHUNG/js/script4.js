
var textWrapper3 = document.querySelector('.ml103 .letters3');
textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter3'>$&</span>");

anime.timeline({loop: true})
  .add({
	targets: '.ml103 .letter3',
	rotateY: [-90, 0],
	duration: 5000,
	delay: (el, i) => 45 * i
  }).add({
	targets: '.ml103',
	opacity: 0,
	duration: 1000,
	easing: "easeOutExpo",
	delay: 1000
  });






