$(document).ready(function(){

  paintBrush = new PaintBrush();
  paintBrush.resizeCanvas($("canvas").parent().innerWidth() ,
                          $("canvas").parent().innerHeight())

  $('#color-area').on('mousedown',function(e){
    paintBrush.startPath(e.offsetX, e.offsetY);
  });

  $('#color-area').on('mousemove',function(e){
    paintBrush.addPath(e.offsetX ,e.offsetY); 
  });

  $('#color-area').on('mouseup', function(e){
    paintBrush.endPath();
  });
  

  $(window).on('resize',function(e){
    paintBrush.resizeCanvas($("canvas").parent().innerWidth(),
                            $("canvas").parent().innerHeight())
  });
});


