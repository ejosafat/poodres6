export default class Bicycle {
    constructor(options = {}) {
        ({
            size: this.size,
            tape_color: this.tape_color
        } = options);
    }

    spares() {
        return {
            chain: '10-speed',
            tire_size: '23',
            tape_color: this.tape_color
        };
    }
}

if (require.main == module) {
    const bike = new Bicycle({
        size: 'M',
        tape_color: 'red'
    });

    console.log(bike.size);
    console.log(bike.spares());
}
