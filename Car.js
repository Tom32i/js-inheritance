Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

/**
 * Car
 */
function Car (name, gas)
{
    Vehicle.call(this, name);

    this.gas = gas || 10;
}

/**
 * Vehicle speed
 *
 * @type {Number}
 */
Car.prototype.speed = 10;

/**
 * Run
 */
Car.prototype.run = function()
{
    if (this.gas) {
        Vehicle.prototype.run.call(this);
        this.gas--;
    }
};