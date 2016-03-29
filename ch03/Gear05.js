export default class Gear {
    constructor(options) {
        ({
            chainring: this.chainring,
            cog: this.cog,
            wheel: this.wheel
        } = options);
    }

    ratio() {
        return this.chainring / this.cog;
    }

    gear_inches() {
        return this.ratio() * this.wheel.diameter();
    }
}

class Wheel {
    constructor(rim, tire) {
        this.rim = rim;
        this.tire = tire;
    }

    diameter() {
        return this.rim + (this.tire * 2);
    }
}

if (require.main == module) {
    console.log((new Gear({
        chainring: 52,
        cog: 11,
        wheel: new Wheel(26, 1.5)
    }).gear_inches()));
}
