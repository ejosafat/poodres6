export default class Bicycle {
    constructor(options = {}) {
        this.size = options.size || 'L';
        this.chain = typeof options.chain !== 'undefined' ?
            options.chain : this.default_chain();
        this.tire_size = typeof options.tire_size !== 'undefined' ?
            options.tire_size : this.default_tire_size();

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

    local_spares() {
        return {};
    }
}
