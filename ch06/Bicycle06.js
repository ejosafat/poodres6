class Bicycle {
    constructor(options = {}) {
        this.size = options.size;
        this.chain = options.chain || this.default_chain();
        this.tire_size = options.tire_size || this.default_tire_size();
    }

    default_chain() {
        return '10-speed';
    }
}

export class RoadBike extends Bicycle {
    constructor(options = {}) {
        super(options);
        ({
            tape_color: this.tape_color,
        } = options);
    }

    default_tire_size() {
        return '23';
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

    default_tire_size() {
        return '2.1';
    }

    spares() {
        let result = super.spares();
        result.rear_shock = this.rear_shock;

        return result;
    }
}

if (require.main == module) {
    const road_bike = new RoadBike({
        size: 'M',
        tape_color: 'red'
    });
    console.log(road_bike.tire_size);
    console.log(road_bike.chain);

    const mountain_bike = new MountainBike({
        size: 'S',
        front_shock: 'Manitou',
        rear_shock: 'Fox'
    });

    console.log(mountain_bike.tire_size);
    console.log(mountain_bike.chain);
}
