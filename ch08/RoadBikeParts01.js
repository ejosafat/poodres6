import Parts from './Parts01.js';

class RoadBikeParts extends Parts {
    post_initialize(options) {
        this.tape_color = options.tape_color;
    }

    local_spares() {
        return {
            tape_color: this.tape_color
        };
    }

    default_tire_size() {
        return '23'
    }
}

export default RoadBikeParts;
