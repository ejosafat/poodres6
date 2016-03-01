export default class Gear {
    constructor(chainring, cog) {
        this.chainring = chainring;
        this.cog = cog;
    }

    ratio() {
        return this.chainring / this.cog;
    }
}

if (require.main == module) {
    console.log((new Gear(52, 11)).ratio());
    console.log((new Gear(30, 27)).ratio());
}

