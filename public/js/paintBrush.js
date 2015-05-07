var PaintBrush = function(){
  this.canvas = $('#color-area')[0]; 
  this.isDrawing = false;
  this.brush = this.canvas.getContext('2d');
  this.fillColor = "#B24026"; 
};

PaintBrush.prototype.startPath = function(x,y){
  this.setBrushStyle();
  this.isDrawing = true;
  this.brush.beginPath();
  this.brush.moveTo(x,y);
};

PaintBrush.prototype.endPath = function(){
  this.isDrawing = false;
  this.brush.closePath();
};

PaintBrush.prototype.addPath = function(x,y){
  if(this.isDrawing){
    this.brush.lineTo(x,y);
    this.brush.stroke();
  }
};

PaintBrush.prototype.resizeCanvas = function(width, height){
  this.brush.canvas.width = width;
  this.brush.canvas.height = height;
};


PaintBrush.prototype.setBrushStyle = function(){
  this.brush.lineWidth = 5; 
  this.brush.lineJoin = 'round';
  this.brush.lineCap = 'round';
  this.brush.strokeStyle = this.fillColor; 
  this.brush.shadowBlur = 10;
  this.brush.shadowColor = 'rgb(0, 0, 0)';
};
