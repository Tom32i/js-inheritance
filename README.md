js-inheritance
==============

And very simple example of Javascript inheritance

## How to inherit a Javascript class?

See `Bicycle.js`:

    /* Inherit the parent class */
    Bicycle.prototype = Object.create(Vehicle.prototype);
    Bicycle.prototype.constructor = Bicycle;

    /**
     * Bicycle
     */
    function Bicycle (name)
    {
        /* Call the parent constructor on 'this' (with optional parameters) */
        Vehicle.call(this, name);
    }

## How the call the parent method?

See `Car.js`:

    Car.prototype.run = function()
    {
        if (this.gas) {
            /* Call the 'run' method of the parent class */
            Vehicle.prototype.run.call(this);
            this.gas--;
        }
    };

_Note:_ to understand how the `call`method works: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
