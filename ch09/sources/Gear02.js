export default class Gear {
    constructor(options) {
        ({
            chainring: this.chainring,
            cog: this.cog,
            wheel: this.wheel,
            observer: this.observer,
        } = options);
    }

    set_cog(new_cog) {
      this.cog = new_cog;
      this.changed();
    }

    set_chainring(new_chainring) {
      this.chainring = new_chainring;
      this.changed();
    }

    changed() {
      this.observer.changed(this.chainring, this.cog);
    }

    ratio() {
        return this.chainring / this.cog;
    }

    gear_inches() {
        return this.ratio() * this.wheel.diameter();
    }
}
