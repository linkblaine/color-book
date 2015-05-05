$(document).ready(function(){

  paintBrush = new drawTool();

  $('#color-area').on('mousedown',function(e){
    paintBrush.startBrush(e.offsetX, e.offsetY);
  });

  $('#color-area').on('mouseup',function(e){
    paintBrush.endBrush();
  });

  $('#color-area').on('mousemove',function(e){
    paintBrush.draw(e.offsetX ,e.offsetY); 
  });

});


var drawTool = function(){
  var fillColor = "#B24026"; 
  var canvas    = $('#color-area')[0]; 
  var brush     = canvas.getContext('2d');
  var isDrawing = false;

  brush.fillStyle = fillColor;
  brush.strokeStyle = fillColor; 
  brush.lineWidth = 5; 

  var startPath = function(x,y){
    isDrawing = true;
    brush.moveTo(x,y);
    brush.lineJoin = brush.lineCap = 'round';
    return false;
  };

  var endPath = function(){
    isDrawing = false;
    return false;
  };

  var addPoint = function(x,y){
    if(isDrawing){
      brush.lineTo(x,y);
      brush.stroke();
    }
    return false;
  };

  return {
    startBrush: startPath,
    endBrush:   endPath,
    draw:       addPoint
  }
};

