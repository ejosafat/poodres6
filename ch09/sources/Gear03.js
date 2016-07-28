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
        return this.ratio() * this.wheel.width();
    }
}
