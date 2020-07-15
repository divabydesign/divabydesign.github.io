function load() {
  resize();
}

function resize() {
  let navtop = 90 + $("#logo").height();
  $("#nav").css({"top": navtop + "px"});
}
