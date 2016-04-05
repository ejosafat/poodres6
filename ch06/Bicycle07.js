class Bicycle {
    constructor(options = {}) {
        this.size = options.size;
        this.chain = options.chain || this.default_chain();
        this.tire_size = options.tire_size || this.default_tire_size();

        this.post_initialize(options);
    }

    post_initialize(options) {}

    default_chain() {
        return '10-speed';
    }

    default_tire_size() {
        throw 'Implement default_tire_size()';
    }

    spares() {
        return Object.assign({
            tire_size: this.tire_size,
            chain: this.chain
        }, this.local_spares());
    }
}

export class RoadBike extends Bicycle {
    post_initialize(options = {}) {
        ({
            tape_color: this.tape_color,
        } = options);
    }

    default_tire_size() {
        return '23';
    }

    local_spares() {
        return {
            tape_color: this.tape_color
        };
    }
}

export class MountainBike extends Bicycle {
    post_initialize(options = {}) {
        ({
            front_shock: this.front_shock,
            rear_shock: this.rear_shock
        } = options);
    }

    default_tire_size() {
        return '2.1';
    }

    local_spares() {
        return {
            rear_shock: this.rear_shock
        };
    }
}

if (require.main == module) {
    const road_bike = new RoadBike({
        size: 'M',
        tape_color: 'red'
    });
    console.log(road_bike.tire_size);
    console.log(road_bike.chain);
    console.log(road_bike.spares());

    const mountain_bike = new MountainBike({
        size: 'S',
        front_shock: 'Manitou',
        rear_shock: 'Fox'
    });

    console.log(mountain_bike.tire_size);
    console.log(mountain_bike.chain);
    console.log(mountain_bike.spares());
}
