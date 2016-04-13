class Parts {
    constructor(options = {}) {
        this.chain = options.chain || this.default_chain();
        this.tire_size = options.tire_size || this.default_tire_size();

        this.post_initialize(options);
    }

    spares() {
        return Object.assign({
            tire_size: this.tire_size,
            chain: this.chain
        }, this.local_spares());
    }

    post_initialize(options) {}

    default_chain() {
        return '10-speed';
    }

    default_tire_size() {
        throw 'Implement default_tire_size()';
    }
}

export default Parts;
