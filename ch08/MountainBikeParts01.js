import Parts from './Parts01.js';

class MountainBikeParts extends Parts {
    post_initialize(options) {
        ({
            rear_shock: this.rear_shock,
            front_shock: this.front_shock
        } = options);
    }

    local_spares() {
        return {
            rear_shock: this.rear_shock
        };
    }

    default_tire_size() {
        return '2.1'
    }
}

export default MountainBikeParts;
