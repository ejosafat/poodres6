export class Bicycle {
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
        return {
            chain: '10-speed',
            tire_size: '23',
            tape_color: this.tape_color
        };
    }
}

export class MountainBike extends Bicycle {
    constructor(options = {}) {
        super(options);
        ({
            front_shock: this.front_shock,
            rear_shock: this.rear_shock
        } = options);
    }

    spares() {
        let result = super.spares();
        result.rear_shock = this.rear_shock;

        return result;
    }
}

if (require.main == module) {
    const bike = new MountainBike({
        size: 'S',
        front_shock: 'Manitou',
        rear_shock: 'Fox'
    });

    console.log(bike.size);
    console.log(bike.spares());
}
