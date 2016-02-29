class Gear {
    constructor(chainring, cog) {
        this.chainring = chainring;
        this.cog = cog;
    }

    ratio() {
        return this.chainring / this.cog;
    }
}

module.exports = Gear;
