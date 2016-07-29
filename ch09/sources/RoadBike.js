import Bicycle from './Bicycle';

export default class RoadBike extends Bicycle {
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
