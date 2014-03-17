/**
 * Vehicle
 */
function Vehicle(name)
{
    this.name     = name;
    this.position = 0;
}

/**
 * Vehicle speed
 *
 * @type {Number}
 */
Vehicle.prototype.speed = 1;

/**
 * Run the vehicle
 */
Vehicle.prototype.run = function()
{
    this.position += this.speed;
};

/**
 * Display the position of the vehicle
 *
 * @return {String}
 */
Vehicle.prototype.display = function()
{
    return this.name + " is " + this.position + "m away from home.";
};