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
  
  let footertop = $("#ncontent").height() - height;
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
  
  let shopcontainerwidth = $("#pcontent").width() - 120;
  let shopcontainerheighte = $("#pcontent").height() - 120 - $("#ehead").height();
  let shopcontainerheightn = $("#pcontent").height() - 120 - $("#nhead").height();
  let shopcontainerheightb = $("#pcontent").height() - 120 - $("#bhead").height();
  $("#erings").css({"width": shopcontainerwidth + "px"});
  $("#necklaces").css({"width": shopcontainerwidth + "px"});
  $("#bracelets").css({"width": shopcontainerwidth + "px"});
  
  let size = (shopcontainerwidth - 2) / 3;
  $("#egrid").css({"grid-template-columns": size + "px " + size + "px " + size + "px"});
  $("#egrid").css({"grid-template-rows": size + "px " + size + "px " + size + "px"});
  $("#ngrid").css({"grid-template-columns": size + "px " + size + "px " + size + "px"});
  $("#ngrid").css({"grid-template-rows": size + "px " + size + "px " + size + "px"});
  $("#bgrid").css({"grid-template-columns": size + "px " + size + "px " + size + "px"});
  $("#bgrid").css({"grid-template-rows": size + "px " + size + "px " + size + "px"});
  
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
  newstylesheet.html('.shoptileimg{height:tileimgsize'+'px}')
  newstylesheet.html('.shoptileimg{width:tileimgsize'+'px}')
  
}
