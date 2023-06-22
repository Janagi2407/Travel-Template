// menu btn
$(document).ready(function () {
  $("#menu-btn").click(function () {
    $(".header nav").addClass("active");
  });
  
  // menu active
  $(".nav-item .nav-link").click(function () {
    $(".nav-item .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  $(window).scroll(function () {
    $(".header nav").removeClass("active");
  });
});

// search bar
$(document).ready(function () {
  $(".search-toggle").click(function () {
    $(".search-popup").addClass("active");
  });

  $(".close-search").click(function () {
    $(".search-popup").removeClass("active");
  });

  // user icon click
  $('.user-toggle').on('click', function () {
    $('.user-dropdown-menu').toggleClass('active');
  });
});


// JS for About Section Video Controls

const video = document.querySelector('.video');
const controls = document.querySelector('.controls');
const videoSources = controls.querySelectorAll('.control-btn');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');

videoSources.forEach(source => {
  const src = source.getAttribute('data-src');
  source.addEventListener('click', () => {
    video.src = src;
    controls.querySelector('.active').classList.remove('active');
    source.classList.add('active');
    video.play();
  });
});

playBtn.addEventListener('click', () => {
  video.play();
  playBtn.style.display = 'none';
  pauseBtn.style.display = 'inline-block';
});

pauseBtn.addEventListener('click', () => {
  video.pause();
  pauseBtn.style.display = 'none';
  playBtn.style.display = 'inline-block';
});

video.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
  } else {
    video.pause();
    pauseBtn.style.display = 'none';
    playBtn.style.display = 'inline-block';
  }
});
// about video section end


