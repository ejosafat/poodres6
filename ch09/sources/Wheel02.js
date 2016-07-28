export default class Wheel {
    constructor(rim, tire) {
        this.rim = rim;
        this.tire = tire;
    }

    width() {
        return this.rim + (this.tire * 2);
    }
}
