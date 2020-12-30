class Block  {
    constructor(x, y, width, height){
      var options={
        restituition:0.4,
        friction:0
        
        
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 225;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3)
      {
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(8)
      stroke("#FF0099")
      fill("#CC00FF");
      rect(0, 0, this.width, this.height);
      pop();
}else{
  World.remove(world,this.body)
  push();
  this.visibility=this.visibility-5
  pop();
}
      

    }
    
   score() {
      if(this.visibility<0 && this.visibility>-105){
        score++
      }
      
    }
  }

  