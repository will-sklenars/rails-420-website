var colors = ['#FF3B77', '#CEFF00','#FFFFFF','#05F9F0'];

function sample (array) {
  return array[Math.floor(Math.random() * colors.length)];
}

function mixDatShit () {
  var h1 = document.getElementsByTagName('h1')[0];
  h1.style.color = sample(colors)
}

function playDatShit () {
  var sounds = document.getElementsByTagName('audio');
  var sound = sample(sounds);
  sound.play();
}

function noise() {
    var rand = Math.round(Math.random() * 200) + 420;
    setTimeout(function () {
            playDatShit();
            noise();
    }, rand);
}

var plur = setInterval(function () {
  mixDatShit();
}, 1)

noise();