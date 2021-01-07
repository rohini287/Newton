class bob{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    
        this.x=x;
        this.y=y;
        this.r=r;
       
        this.body=Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
       
    }

    display(){
        var paperpos=this.body.position;

        push()
        translate(paperpos.x,paperpos.y);
        ellipseMode(RADIUS)
        strokeWeight(3);
        fill("pink");
        ellipse(0,0,this.r,this.r);
        pop();
    }
}