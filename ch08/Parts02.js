class Parts {
    constructor(parts) {
        this.parts = parts;

        return new Proxy(this, {
            get(target, name) {
                if (name === 'length') {
                    return target.parts.length;
                }
                return target[name];
            }
        });
    }

    spares() {
        return this.parts.filter(part => part.needs_spare);
    }
}

export default Parts;
