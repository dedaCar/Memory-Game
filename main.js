var icons = [
  '<i class="fa fa-id-card" aria-hidden="true"></i>',
  '<i class="fa fa-snowflake-o" aria-hidden="true"></i>',
  '<i class="fa fa-bluetooth" aria-hidden="true"></i>',
  '<i class="fa fa-cloud-download" aria-hidden="true"></i>',
  '<i class="fa fa-gamepad" aria-hidden="true"></i>',
  '<i class="fa fa-shopping-bag" aria-hidden="true"></i>',
  '<i class="fa fa-wifi" aria-hidden="true"></i>',
  '<i class="fa fa-street-view" aria-hidden="true"></i>',
  '<i class="fa fa-transgender-alt" aria-hidden="true"></i>',
  '<i class="fa fa-cc-paypal" aria-hidden="true"></i>',
  '<i class="fa fa-pie-chart" aria-hidden="true"></i>',
  '<i class="fa fa-money" aria-hidden="true"></i>',
  '<i class="fa fa-jpy" aria-hidden="true"></i>',
  '<i class="fa fa-hand-o-up" aria-hidden="true"></i>',
  '<i class="fa fa-stop" aria-hidden="true"></i>',
  '<i class="fa fa-imdb" aria-hidden="true"></i>',
  '<i class="fa fa-soundcloud" aria-hidden="true"></i>',
  '<i class="fa fa-steam" aria-hidden="true"></i>',
  '<i class="fa fa-id-card" aria-hidden="true"></i>',
  '<i class="fa fa-snowflake-o" aria-hidden="true"></i>',
  '<i class="fa fa-bluetooth" aria-hidden="true"></i>',
  '<i class="fa fa-cloud-download" aria-hidden="true"></i>',
  '<i class="fa fa-gamepad" aria-hidden="true"></i>',
  '<i class="fa fa-shopping-bag" aria-hidden="true"></i>',
  '<i class="fa fa-wifi" aria-hidden="true"></i>',
  '<i class="fa fa-street-view" aria-hidden="true"></i>',
  '<i class="fa fa-transgender-alt" aria-hidden="true"></i>',
  '<i class="fa fa-cc-paypal" aria-hidden="true"></i>',
  '<i class="fa fa-pie-chart" aria-hidden="true"></i>',
  '<i class="fa fa-money" aria-hidden="true"></i>',
  '<i class="fa fa-jpy" aria-hidden="true"></i>',
  '<i class="fa fa-hand-o-up" aria-hidden="true"></i>',
  '<i class="fa fa-stop" aria-hidden="true"></i>',
  '<i class="fa fa-imdb" aria-hidden="true"></i>',
  '<i class="fa fa-soundcloud" aria-hidden="true"></i>',
  '<i class="fa fa-steam" aria-hidden="true"></i>'
];

var isFlipInProgress = false;
var clicks = 0;
var twoBox = [];
var container = document.querySelector(".container");
createTable();
var box = document.querySelectorAll('.box');
for (var i = 0; i < box.length; i++) {
  box[i].addEventListener('click', flip);
}

function flip() {

  if (isFlipInProgress) {
    return;
  }
  isFlipInProgress = true;
  clicks++;
  this.removeEventListener('click',flip);
  twoBox.push(this);
  var back = this.children[0];
  var front = this.children[1];
  back.style.transform = "perspective(900px) rotateY(0deg)";
  front.style.transform = "perspective(900px) rotateY(180deg)";
  if (clicks == 2) {
    checkFlip();
  } else {
    isFlipInProgress = false;
  }
}

function checkFlip() {
  var front1 = twoBox[0].children[1];
  var back1 = twoBox[0].children[0];
  var front2 = twoBox[1].children[1];
  var back2 = twoBox[1].children[0];

  if (back1.innerHTML == back2.innerHTML) {
    clicks = 0;
    twoBox.length = 0;
    isFlipInProgress = false;
  } else {
    setTimeout(function() {
      front1.style.transform = "perspective(900px) rotateY(0deg)";
      back1.style.transform = "perspective(900px) rotateY(180deg)";
      front2.style.transform = "perspective(900px) rotateY(0deg)";
      back2.style.transform = "perspective(900px) rotateY(180deg)";
      clicks = 0;
      twoBox[0].addEventListener('click',flip);
      twoBox[1].addEventListener('click',flip);
      twoBox.length = 0;
      isFlipInProgress = false;
    }, 700)
  }

}

function handleBackRotation(elem1, elem2) {

}

function createTable() {
  var text = '';
  for (var i = 0; i < 36; i++) {
    var rand = Math.floor(Math.random() * icons.length);
    text += "<div class='box'><div class='back'>" + icons[rand] + "</div><div class='front'></div></div>";
    icons.splice(rand, 1);
  }
  container.innerHTML = text;
}
