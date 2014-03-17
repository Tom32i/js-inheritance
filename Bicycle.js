Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;

/**
 * Bicycle
 */
function Bicycle (name)
{
    Vehicle.call(this, name);
}