export default class Gear {
    constructor(chainring, cog, rim, tire) {
        this.chainring = chainring;
        this.cog = cog;
        this.wheel = new Wheel(rim, tire);
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
    console.log((new Gear(52, 11, 26, 1.5)).gear_inches());
    console.log((new Gear(52, 11, 24, 1.25)).gear_inches());
}
