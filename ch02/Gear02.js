export default class Gear {
    constructor(chainring, cog, rim, tire) {
        this.chainring = chainring;
        this.cog = cog;
        this.rim = rim;
        this.tire = tire;
    }

    ratio() {
        return this.chainring / this.cog;
    }

    gear_inches() {
        return this.ratio() * (this.rim + (this.tire * 2));
    }
}

if (require.main == module) {
    console.log((new Gear(52, 11, 26, 1.5)).gear_inches());
    console.log((new Gear(52, 11, 24, 1.25)).gear_inches());
}
