export default class Gear {
    constructor(chainring, cog, wheel = null) {
        this.chainring = chainring;
        this.cog = cog;
        this.wheel = wheel;
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

    circumference() {
        return this.diameter() * Math.PI;
    }
}

if (require.main == module) {
    const wheel = new Wheel(26, 1.5);
    console.log(wheel.circumference());
    console.log((new Gear(52, 11, wheel)).gear_inches());
    console.log((new Gear(52, 11)).ratio());
}
