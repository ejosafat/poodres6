import scheduleMixin from './Schedule02.js'

class Vehicle {
    lead_days() {
        return 3;
    }
}

class Mechanic {
    lead_days() {
        return 4;
    }
}

if (require.main == module) {
    scheduleMixin(Vehicle);
    scheduleMixin(Mechanic);
    const starting = new Date(2015, 8, 4);
    const ending = new Date(2015, 8, 10);
    const v = new Vehicle();
    const m = new Mechanic();
    console.log(v.isSchedulable(starting, ending));
    console.log(m.isSchedulable(starting, ending));
}
