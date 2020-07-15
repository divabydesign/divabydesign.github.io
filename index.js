function load() {
  resize();
}

function resize() {
  let navtop = 90 + $("#logo").height();
  $("#nav").css({"top": navtop + "px"});
  
  let top = 30 + $("#htext").height();
  $("#stext").css({"top": top + "px"});
  
  top += 30 + $("#stext").height();
  $("#atext").css({"top": top + "px"});
  
  top += 15 + $("#atext").height();
  $("#1stext").css({"top": top + "px"});
  
  top += 15 + $("#1stext").height();
  $("#2stext").css({"top": top + "px"});
  
  top += 15 + $("#2stext").height();
  $("#3stext").css({"top": top + "px"});
  
  top += 30 + $("#3stext").height();
  $("#ctext").css({"top": top + "px"});
  
  let height = 60 + $("#flogo").height();
  $("#footer").css({"height": height + "px"});
  
  let footertop = $("#ncontent").height() - height
  $("#footer").css({"top": footertop + "px"});
  
  let left = ($("#ncontent").height() / 100) * 7.5;
  $("#1fbar").css({"left": left + "px"});
  
  left += left + $("#1fbar").width() + $("#flogo").width()
  $("#2fbar").css({"left": left + "px"});
}
