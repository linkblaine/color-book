$(document).ready(function(){

  var blue   = 'rgb(50,  111, 148)';
  var green  = 'rgb(13,  156, 64)';
  var yellow = 'rgb(206, 198, 23)';
  var orange = 'rgb(206, 133, 23)';
  var red    = 'rgb(206, 82,  23)';
  var black  = 'rgb(0,   0,   0)';
  var white  = 'rgb(255, 255, 255)';


  blueBrush   = new PaintBrush('#color-area', blue);
  greenBrush  = new PaintBrush('#color-area', green);
  yellowBrush = new PaintBrush('#color-area', yellow);
  orangeBrush = new PaintBrush('#color-area', orange);
  redBrush    = new PaintBrush('#color-area', red);
  blackBrush  = new PaintBrush('#color-area', black);
  whiteBrush  = new PaintBrush('#color-area', white);

  canvasManager = new PaintBrush('#color-area');
 
  currentBrush = blueBrush;
  wireEvents();
  
  canvasManager.resizeCanvas(
    $("canvas").parent().innerWidth(),
    $("canvas").parent().innerHeight()
  );
});


var wireEvents = function(){
  $('#color-area').on('mousedown',function(e){
    currentBrush.startPath(e.offsetX, e.offsetY);
  });

  $('#color-area').on('mousemove',function(e){
    currentBrush.addPath(e.offsetX ,e.offsetY); 
  });

  $('#color-area').on('mouseup', function(e){
    currentBrush.endPath();
  });
};


