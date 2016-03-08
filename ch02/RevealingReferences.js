class RevealingReferences {
    constructor(data) {
        this.wheels = wheelify(data);
    }

    diameters() {
        return this.wheels.map(wheel => wheel.rim + (wheel.tire * 2));
    }
}

function wheelify (data) {
    return data.map(cell => ({
        rim: cell[0],
        tire: cell[1]
    }));
}

if (require.main == module) {
    const data = [[622, 20], [622, 23], [559, 30], [559, 40]];
    const thing = new RevealingReferences(data);
    console.log(thing.diameters());
}
