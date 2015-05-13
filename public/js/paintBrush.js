var PaintBrush = function(canvas, rgba){
  var self = this;
  var canvas = $(canvas)[0]; 
  self.isDrawing = false;
  self.brush = canvas.getContext('2d');
  self.color = rgba 
};

PaintBrush.prototype.startPath = function(x,y){
  var self = this;
  self.setBrushStyle();
  self.isDrawing = true;
  self.brush.beginPath();
  self.brush.moveTo(x,y);
};

PaintBrush.prototype.endPath = function(){
  var self = this;
  self.isDrawing = false;
  self.brush.closePath();
};

PaintBrush.prototype.addPath = function(x,y){
  var self = this;
  if(self.isDrawing){
    self.brush.lineTo(x,y);
    self.brush.stroke();
  }
};

PaintBrush.prototype.resizeCanvas = function(width, height){
  var self = this;
  self.brush.canvas.width = width;
  self.brush.canvas.height = height;
};


PaintBrush.prototype.setBrushStyle = function(){
  var self = this;
  self.brush.lineWidth = 3; 
  self.brush.lineJoin = 'round';
  self.brush.lineCap = 'round';
  self.brush.strokeStyle = self.color; 
  self.brush.fillStyle = self.color; 
  self.brush.shadowBlur = 3;
  self.brush.shadowColor = self.color;
};

PaintBrush.prototype.setImage = function(){
  var self = this;
  img = new Image()
  img.src = 'image.png'
  self.brush.drawImage(img,0,0);
};
