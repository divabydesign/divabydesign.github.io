function load() {
  resize();
}

function resize() {
  let navtop = 90 + $("#logo").height();
  $("#nav").css({"top": navtop + "px"});
  
  let top = 60 + $("#htext").height();
  $("#stext").css({"top": top + "px"});
  
  top += 60 + $("#stext").height();
  $("#atext").css({"top": top + "px"});
  
  top += 30 + $("#atext").height();
  $("#1stext").css({"top": top + "px"});
  
  top += 30 + $("#1stext").height();
  $("#2stext").css({"top": top + "px"});
  
  top += 30 + $("#2stext").height();
  $("#3stext").css({"top": top + "px"});
  
  top += 60 + $("#3stext").height();
  $("#ctext").css({"top": top + "px"});
}
