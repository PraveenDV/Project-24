class DUSTBIN{
    constructor(x,y,width,height){
        var options={
            'density':1.0,
            'friction':1.3,
            'restitution':0.3,
            isStatic:true
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.height=height;
        this.width=width;

        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}