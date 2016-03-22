export default class Gear {
    constructor(chainring, cog, wheel) {
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
}

if (require.main == module) {
    console.log((new Gear(52, 11, new Wheel(26, 1.5)).gear_inches()));
}
