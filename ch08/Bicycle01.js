import RoadBikeParts from './RoadBikeParts01.js';
import MountainBikeParts from './MountainBikeParts01.js';

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

export default Bicycle;

if (require.main == module) {
    const road_bike = new Bicycle({
        size: 'L',
        parts: new RoadBikeParts({
            tape_color: 'red'
        })
    });

    console.log(road_bike.size);
    console.log(road_bike.spares());

    const mountain_bike = new Bicycle({
        size: 'L',
        parts: new MountainBikeParts({
            rear_shock: 'Fox'
        })
    });

    console.log(mountain_bike.size);
    console.log(mountain_bike.spares());
}
