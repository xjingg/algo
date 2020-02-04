
9. Write a JavaScript program to calculate the area and perimeter of a circle. Go to the editor
Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.

function circle(radius)
{
    this.radius = radius;
  // area method
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
    };
  // perimeter method
    this.perimeter = function ()
    {
        return 2*Math.PI*this.radius;
    };
}
var c = new circle(3);
console.log('Area =', c.area().toFixed(2));
console.log('perimeter =', c.perimeter().toFixed(2));


Area = 28.27
VM1407:17 perimeter = 18.85