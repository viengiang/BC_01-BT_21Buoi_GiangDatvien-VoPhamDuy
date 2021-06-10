document.getElementById("cvSwitch").onclick = function () {
  document.getElementById("cvBody").classList.toggle("cvDark");
};

document.getElementById("navbar-toggler").onclick = function () {
  document.getElementById("cvHeader").classList.toggle("active");
  document.getElementById("cvBody").classList.toggle("noScroll");
};

window.onscroll = function() {
  if (document.body.scrollTop >= 80 || document.documentElement.scrollTop >= 80) {
    document.getElementById("cvHeader").classList.add("cvHeader--scroll");
  } else {
    document.getElementById("cvHeader").classList.remove("cvHeader--scroll");
  }
}

document.getElementById("cvSearch").onclick = function () {
  document.getElementById("cvBody").classList.add("search-active");
  document.getElementById("cvInputSearch").focus();
}

document.getElementById("cvbtnCloseSearch").onclick = function () {
  document.getElementById("cvBody").classList.remove("search-active");
}