

class Paperball{
    constructor(x,y,width,height){
        var options = {
           isStatic:false,
            
            friction:0.8,
            density:1.2



        }
        this.x=x;
        this.y=y;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        
        rectMode(CENTER);
        fill("blue");
        rect(0,0, this.width, this.height);
        pop();
    }
}