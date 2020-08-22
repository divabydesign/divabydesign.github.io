function load() {
  resize();
}

function resize() {
  let textdivider = ($("#ncontent").height() / 100) * 6;

  if (textdivider > 55) {
    textdivider = 55;
  }

  let navtop = 60 + $("#logo").height();
  $("#nav").css({"top": navtop + "px"});
  
  let top = textdivider + $("#htext").height();
  $("#stext").css({"top": top + "px"});
  
  top += textdivider + $("#stext").height();
  $("#atext").css({"top": top + "px"});
  
  let pcontentleft = $("#ncontent").width() + 5;
  let pcontentwidth = ($("#content").width() / 100) * 85 - 5;
  $("#pcontent").css({"left": pcontentleft + "px"});
  $("#pcontent").css({"width": pcontentwidth + "px"});
  
  $("#ncontent").css({"width": (($("#content").width() / 100) * 15) + "px"});
  
  if ($("#ncontent").width() > 200) {
    $("#ncontent").css({"width": 200 + "px"});
    $("#pcontent").css({"width": $("#content").width() - 200 - $("#divider").width() + "px"});
    $("#pcontent").css({"left": $("#ncontent").width() + $("#divider").width() + "px"});
  }
  
  let height = 60 + $("#flogo").height();
  $("#footer").css({"height": height + "px"});
  
  $("#ofbar").css({"width": ($("#ncontent").width() / 100) * 27.5 + "px"});
  $("#tfbar").css({"width": ($("#ncontent").width() / 100) * 27.5 + "px"});
  $("#flogo").css({"width": ($("#ncontent").width() / 100) * 30 + "px"});
  
  let footertop = $("#ncontent").height() - height;
  $("#footer").css({"top": footertop + "px"});
  
  let left = ($("#ncontent").width() / 100) * 7.5;
  $("#ofbar").css({"left": left + "px"});
  
  left = ($("#ncontent").width() / 100) * 65;
  $("#tfbar").css({"left": left + "px"});
  
  let fbartop = ($("#footer").height() / 2) - 2.5;
  $("#ofbar").css({"top": fbartop + "px"});
  $("#tfbar").css({"top": fbartop + "px"});

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
  
  $("#htext").css({"left": (($("#ncontent").width() - $("#htext").width()) / 2) + "px"});
  $("#stext").css({"left": (($("#ncontent").width() - $("#stext").width()) / 2) + "px"});
  $("#atext").css({"left": (($("#ncontent").width() - $("#atext").width()) / 2) + "px"});
  $("#ctext").css({"left": (($("#ncontent").width() - $("#ctext").width()) / 2) + "px"});

}
