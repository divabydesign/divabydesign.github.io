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
  
  top += textdivider / 2 + $("#stext").height();
  $("#onestext").css({"top": top + "px"});
  
  top += textdivider / 2 + $("#onestext").height();
  $("#twostext").css({"top": top + "px"});
  
  top += textdivider / 2 + $("#twostext").height();
  $("#threestext").css({"top": top + "px"});
  
  top += textdivider + $("#threestext").height();
  $("#atext").css({"top": top + "px"});
  
  top += textdivider + $("#atext").height();
  $("#ctext").css({"top": top + "px"});
  
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
  
  let shopcontainerwidth = $("#pcontent").width() - 120;
  let shopcontainerheighte = $("#pcontent").height() - 120 - $("#ehead").height();
  let shopcontainerheightn = $("#pcontent").height() - 120 - $("#nhead").height();
  let shopcontainerheightb = $("#pcontent").height() - 120 - $("#bhead").height();
  $("#erings").css({"width": shopcontainerwidth + "px"});
  $("#necklaces").css({"width": shopcontainerwidth + "px"});
  $("#bracelets").css({"width": shopcontainerwidth + "px"});
  
  let size = (shopcontainerwidth - 2) / 3;
  $("#egrid").css({"grid-template-columns": size + "px " + size + "px " + size + "px"});
  $("#egrid").css({"grid-template-rows": size + "px " + size + "px " + size + "px " + size + "px " + size + "px " + size + "px " + size + "px"});
  $("#ngrid").css({"grid-template-columns": size + "px " + size + "px " + size + "px"});
  $("#ngrid").css({"grid-template-rows": size + "px " + size + "px " + size + "px"});
  $("#bgrid").css({"grid-template-columns": size + "px " + size + "px " + size + "px"});
  $("#bgrid").css({"grid-template-rows": size + "px " + size + "px " + size + "px " + size + "px " + size + "px " + size + "px " + size + "px " + size + "px " + size + "px " + size + "px"});
  
  let shoptop = 60;
  $("#ehead").css({"top": shoptop + "px"});
  
  shoptop += 10 + $("#ehead").height();
  $("#erings").css({"top": shoptop + "px"});
  
  shoptop += 60 + $("#erings").height();
  $("#nhead").css({"top": shoptop + "px"});
  
  shoptop += 10 + $("#nhead").height();
  $("#necklaces").css({"top": shoptop + "px"});
  
  shoptop += 60 + $("#necklaces").height();
  $("#bhead").css({"top": shoptop + "px"});
  
  shoptop += 10 + $("#bhead").height();
  $("#bracelets").css({"top": shoptop + "px"});
  
  let tileimgsize = $("#e1").height() - 40 - $("#stp").height() - $("#stt").height();
  $("head").append('<style type="text/css"></style>');
  var newstylesheet = $("head").children(':last');

  newstylesheet.html('.shoptileimg{height:' + tileimgsize + 'px}');
  //newstylesheet.html('.shoptileimg{width:' + tileimgsize + 'px}');
  
  $("#htext").css({"left": (($("#ncontent").width() - $("#htext").width()) / 2) + "px"});
  $("#stext").css({"left": (($("#ncontent").width() - $("#stext").width()) / 2) + "px"});
  
  $("#onestext").css({"left": (($("#ncontent").width() - $("#onestext").width()) / 2) + "px"});
  $("#twostext").css({"left": (($("#ncontent").width() - $("#twostext").width()) / 2) + "px"});
  $("#threestext").css({"left": (($("#ncontent").width() - $("#threestext").width()) / 2) + "px"});
  
  $("#atext").css({"left": (($("#ncontent").width() - $("#atext").width()) / 2) + "px"});
  $("#ctext").css({"left": (($("#ncontent").width() - $("#ctext").width()) / 2) + "px"});
}
