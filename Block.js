class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = 50;
        this.height = 50;
        this.visiblity = 255;
        this.image=loadImage("can.png")
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 7){
          push();
              var pos =this.body.position;
              imageMode(CENTER);
              fill(rgb(3, 252, 194));
              push()
              translate(pos.x,pos.y)
              rotate(this.body.angle)
              image(this.image,0, 0, this.width, this.height);
              pop();
         }
         else{
           World.remove(world, this.body);
           push();
           this.visiblity = this.visiblity - 5;
           tint(255,this.visiblity);
           image(this.image, this.body.position.x, this.body.position.y, 50, 50);
           pop();
         }
      }
      score(){
       if(this.visiblity <0 && this.visiblity >-105) {
        score++;
       }
      }
  }
  