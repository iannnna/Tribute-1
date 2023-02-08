// zoom (for the hero page image)
// image zoom as you scroll
var coverImage = document.querySelector("#banner");

function zoom() {
  var scrollPercent =
    (100 * window.pageYOffset) /
    (document.body.offsetHeight - window.innerHeight);
  var scaleFactor = 1 + scrollPercent * 0.05;
  scaleFactor = Math.min(scaleFactor, 2);
  coverImage.style.transform = "scale(" + scaleFactor + ")";

  requestAnimationFrame(zoom);
}

zoom();

// title-shrink (for the title)
// title shrink and stays upward as you scroll
const windowWidth = window.innerWidth;
let y;
let scale;
let yPercent;

if (windowWidth <= 320) {
  y = "90vh";
  scale = 3.9;
  yPercent = -30;
} else if (windowWidth <= 480) {
  y = "88vh";
  scale = 3.9;
  yPercent = -30;
} else {
  y = "70vh";
  scale = 6;
  yPercent = -20;
}

ScrollTrigger.create({
  animation: gsap.from("#title", {
    y: y,
    scale: scale,
    yPercent: yPercent,
  }),
  scrub: true,
  trigger: "#tribute-info",
  start: "top bottom",
  endTrigger: "#tribute-info",
  end: "top center",
});

// audio
// attach audio on image icon - onclick trigger - audio will play/pause - image icon will change
var song = document.getElementById("song");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (song.paused) {
    song.play();
    icon.src = "./media/music-on.png";
  } else {
    song.pause();
    icon.src = "./media/music-off.png";
  }
};

// navslider menu
TweenMax.from(".navslider", 2, {
  left: "-20%",
  ease: Expo.easeInOut,
  delay: 0.4,
});

var t1 = new TimelineMax({ paused: true });

t1.to(".nav", 1, {
  width: "100%",
  ease: Expo.easeInOut,
});

t1.staggerTo(
  ".nav-item a",
  0.5,
  { top: "0px", ease: Expo.easeInOut },
  0.1,
  "-=0.8"
);

t1.reverse();
$(document).on("click", ".nav-toggle", function () {
  t1.reversed(!t1.reversed());
});

$(document).on("click", ".nav-item a", function () {
  t1.reversed(!t1.reversed());
});

//cast overview jaliswall (to look like a gallery)
$(".wall").jaliswall({
  item: ".wall-item",
  columnClass: ".wall-column",
});
