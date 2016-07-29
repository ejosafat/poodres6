import Bicycle from './Bicycle';

export default class MountainBike extends Bicycle {
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
