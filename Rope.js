class Rope
{
    constructor(body1, body2, Xoffset)
        {
            var options = {
                bodyA: body1,
                bodyB: body2,
            }
            this.rope = Constraint.create(options);
            this.Xoffset = Xoffset;
            World.add(world, this.rope);
        }
    display()
    {
        strokeWeight(3);
        stroke("white");
        line(this.rope.bodyA.position.x + this.Xoffset, this.rope.bodyA.position.y, this.rope.bodyB.position.x, this.rope.bodyB.position.y);
    }
}