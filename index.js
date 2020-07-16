function load() {
  resize();
}

function resize() {
  let navtop = 90 + $("#logo").height();
  $("#nav").css({"top": navtop + "px"});
  
  let top = 30 + $("#htext").height();
  $("#stext").css({"top": top + "px"});
  
  top += 15 + $("#stext").height();
  $("#1stext").css({"top": top + "px"});
  
  top += 15 + $("#1stext").height();
  $("#2stext").css({"top": top + "px"});
  
  top += 15 + $("#2stext").height();
  $("#3stext").css({"top": top + "px"});
  
  top += 30 + $("#3stext").height();
  $("#atext").css({"top": top + "px"});
  
  top += 30 + $("#atext").height();
  $("#ctext").css({"top": top + "px"});
  
  let height = 60 + $("#flogo").height();
  $("#footer").css({"height": height + "px"});
  
  let footertop = $("#ncontent").height() - height
  $("#footer").css({"top": footertop + "px"});
  
  let left = ($("#ncontent").width() / 100) * 7.5;
  $("#1fbar").css({"left": left + "px"});
  
  left = ($("#ncontent").width() / 100) * 65;
  $("#2fbar").css({"left": left + "px"});
  
  let fbartop = ($("#footer").height() / 2) - 2.5;
  $("#1fbar").css({"top": fbartop + "px"});
  $("#2fbar").css({"top": fbartop + "px"});
  
  let pcontentleft = $("#ncontent").width() + 5;
  let pcontentwidth = ($("#content").width() / 100) * 85 - 5;
  $("#pcontent").css({"left": pcontentleft + "px"});
  $("#pcontent").css({"width": pcontentwidth + "px"});
  
  let slogantop = 75 + $("#title").height();
  $("#slogan").css({"top": slogantop + "px"});
  
  let imgtop = slogantop + 10 + $("#slogan").height();
  let imgwidth = $("#pcontent").width() - 120;
  $("#himage").css({"top": imgtop + "px"});
  $("#himage").css({"width": imgwidth + "px"});
  
  let texttop = imgtop + $("#himage").height() + 10;
  let textwidth = $("#himage").width();
  $("#text").css({"top": texttop + "px"});
  $("#text").css({"width": textwidth + "px"});
  
  texttop = 10 + $("#header").height();
  $("#para").css({"top": texttop + "px"});
}
