class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        //this.dustbin=loadImage("dustbin.png",options)
        World.add(world,this.body);
    }

    display(){
        push();
        var binpos= this.body.position;
        translate(binpos.x,binpos.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
      
    }
}