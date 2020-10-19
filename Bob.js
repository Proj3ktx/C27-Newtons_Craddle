class Bob
{
    constructor(x, y, r)
    {
        var options = {
            isStatic: false,
            restitution: 1.0,
            friction: 1.0,
            density: 0.8
        }
        this.body = Bodies.circle(x, y, r, options);
        this.width = r;
        this.height = r;
        World.add(world, this.body);
    }
    display()
    {
        fill("purple");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}