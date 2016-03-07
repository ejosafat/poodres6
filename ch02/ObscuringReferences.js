class ObscuringReferences {
    constructor(data) {
        this.data = data;
    }

    diameters() {
        return this.data.map(cell => cell[0] + (cell[1] * 2));
    }
}

if (require.main == module) {
    const data = [[622, 20], [622, 23], [559, 30], [559, 40]];
    const thing = new ObscuringReferences(data);
    console.log(thing.diameters());
}
