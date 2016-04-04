class Bicycle {
}

export class RoadBike extends Bicycle {
    constructor(options = {}) {
        super(options);
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
    const road_bike = new RoadBike({
        size: 'M',
        tape_color: 'red'
    });
    console.log(road_bike.size);

    const mountain_bike = new MountainBike({
        size: 'S',
        front_shock: 'Manitou',
        rear_shock: 'Fox'
    });

    console.log(mountain_bike.size);
}
