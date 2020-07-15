function load() {
  resize();
}

function resize() {
  let navtop = 90 + $("#logo").height();
  $("#logo").css({"top": navtop + "px"});
}
