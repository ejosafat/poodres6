class Bicycle {
    constructor(options = {}) {
        ({
            size: this.size,
            parts: this.parts
        } = options);
    }

    spares() {
        return this.parts.spares();
    }
}

class Parts {
    constructor(parts) {
        this.parts = parts;
    }

    spares() {
        return this.parts.filter(part => part.needs_spare);
    }
}

class Part {
    constructor({name, description, needs_spare = true}) {
        this.name = name;
        this.description = description;
        this.needs_spare = needs_spare;
    }
}

if (require.main == module) {
    const chain = new Part({
        name: 'chain',
        description: '10-speed'
    });
    const road_tire = new Part({
        name: 'tire_size',
        description: '23'
    });
    const tape = new Part({
        name: 'tape_color',
        description: 'red'
    });
    const mountain_tire = new Part({
        name: 'tire_size',
        description: '2.1'
    });
    const rear_shock = new Part({
        name: 'rear_shock',
        description: 'Fox'
    });
    const front_shock = new Part({
        name: 'front_shock',
        description: 'Manitou',
        needs_spare: false
    });
    const road_bike = new Bicycle({
        size: 'L',
        parts: new Parts([chain, road_tire, tape])
    });

    console.log(road_bike.size);
    console.log(road_bike.spares());

    const mountain_bike = new Bicycle({
        size: 'L',
        parts: new Parts([chain, mountain_tire, front_shock, rear_shock])
    });

    console.log(mountain_bike.size);
    console.log(mountain_bike.spares());
}
