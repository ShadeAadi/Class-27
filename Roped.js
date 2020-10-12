class Rope{
    constructor(body1, body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length: 100,
            stiffness: 0.3
        }
        this.Rope = Constraint.create(options)
        World.add(world, this.Rope)
    }
    display(){
        var po1 = this.Rope.bodyA.position
        var po2 = this.Rope.bodyB.position
        line(po1.x, po1.y, po2.x, po2.y)
    }
}