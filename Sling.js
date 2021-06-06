class Sling{
    constructor(bodyA, bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB
            //stiffness:0.04,
           // length:1
        }
        this.chain=Constraint.create(options)
        World.add(world, this.chain)
        
    }
    display(){
        var point1=this.chain.bodyA.position
        var point2=this.chain.bodyB.position
        strokeWeight(4)
         line (point1.x,point1.y,point2.x,point2.y)
    }
}

