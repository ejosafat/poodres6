import scheduleMixin from './Schedule02.js'

class Bicycle {
    lead_days() {
        return 1;
    }
}

if (require.main == module) {
    scheduleMixin(Bicycle);
    const starting = new Date(2015, 8, 4);
    const ending = new Date(2015, 8, 10);
    const b = new Bicycle();
    console.log(b.isSchedulable(starting, ending));
}

export default Bicycle;
