export default class Bicycle {
    constructor(options = {}) {
        ({
            style: this.style,
            size: this.size,
            tape_color: this.tape_color,
            front_shock: this.front_shock,
            rear_shock: this.rear_shock
        } = options);
    }

    spares() {
        let value;
        if (this.style === 'road') {
            value = {
                chain: '10-speed',
                tire_size: '23',
                tape_color: this.tape_color
            };
        } else {
            value = {
                chain: '10-speed',
                tire_size: '2.1',
                rear_shock: this.rear_shock
            };
        }
        return value;
    }
}

if (require.main == module) {
    const bike = new Bicycle({
        style: 'mountain',
        size: 'S',
        front_shock: 'Manitou',
        rear_shock: 'Fox'
    });

    console.log(bike.spares());
}
