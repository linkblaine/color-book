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

  brushes = {
    blue: blueBrush,
    green: greenBrush,
    yellow: yellowBrush,
    orange: orangeBrush,
    red: redBrush
  };

  canvasManager = new PaintBrush('#color-area');
  wireEvents();

  $('.brush.blue').click();
   
  canvasManager.resizeCanvas(
    $("canvas").parent().innerWidth(),
    $("canvas").parent().innerHeight()
  );
});

var setCurrentBrush = function(selectedPallet){
  $('.brush').removeClass('selected');
  $(selectedPallet).addClass('selected');
  var selectedColor = $(selectedPallet).attr('class').split(" ")[1];
  
  currentBrush = brushes[selectedColor];
};


var wireEvents = function(){

  $(window).resize(function(e){

    var newHeight = $("canvas").parent().innerHeight();
    var newWidth =  $("canvas").parent().innerWidth();

    tempData = $('#color-area')[0].toDataURL('image/png');
    canvasManager.resizeCanvas(newWidth, newHeight);

    img = new Image();

    img.height = newHeight;
    img.width = newWidth;

    img.src = tempData
    canvasManager.brush.drawImage(img,0,0);
  });

  $('.btn.save').on('click', function(e){
    e.preventDefault();
    tempData = $('#color-area')[0].toDataURL('image/png');
  });

  $('.brush').on('click',function(e){
    setCurrentBrush(e.target);
  });

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


