class Ground {
    constructor(x,y,w,h){
        var options = {
            isStatic:true
        }
         this.body = Bodies.rectangle(x,y,w,h,options);
         this.width = w;
         this.height = h;
         this.x=x;
         this.y=y;
         World.add(world,this.body);
        }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.w,this.h);
        }
    }