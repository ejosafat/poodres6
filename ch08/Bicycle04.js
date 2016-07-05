import PartsFactory from './PartsFactory02.js';

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

if (require.main == module) {
    const road_config = [
        ['chain', '10-speed'],
        ['tire_size', '23'],
        ['tape_color', 'red'],
    ];
    const mountain_config = [
        ['chain', '10-speed'],
        ['tire_size', '2.1'],
        ['front_shock', 'Manitou', false],
        ['rear_shock', 'Fox'],
    ];

    const road_bike = new Bicycle({
        size: 'L',
        parts: PartsFactory.build(road_config),
    });

    console.log(road_bike.size);
    console.log(road_bike.spares());

    const mountain_bike = new Bicycle({
        size: 'L',
        parts: PartsFactory.build(mountain_config),
    });

    console.log(mountain_bike.size);
    console.log(mountain_bike.spares());

    console.log(mountain_bike.spares().length);
    console.log(mountain_bike.parts.length);

    const recumbent_config = [
        ['chain', '9-speed'],
        ['tire_size', '28'],
        ['flag', 'tall and orange'],
    ];
    const recumbent_bike = new Bicycle({
        size: 'L',
        parts: PartsFactory.build(recumbent_config),
    });

    console.log(recumbent_bike.spares());
}
