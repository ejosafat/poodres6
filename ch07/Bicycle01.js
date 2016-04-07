import Schedule from './Schedule01.js'

class Bicycle {
    constructor(options = {}) {
        this.schedule = options.schedule || new Schedule();
    }

    isSchedulable(start_date, end_date) {
        return !this.isScheduled(substractDays(start_date, this.lead_days()), end_date);
    }

    isScheduled(start_date, end_date) {
        return this.schedule.isScheduled(this, start_date, end_date);
    }

    lead_days() {
        return 1;
    }
}

function substractDays(date, days) {
    date.setDate(date.getDate() - days);
    return date;
}

if (require.main == module) {
    const starting = new Date(2015, 8, 4);
    const ending = new Date(2015, 8, 10);
    const b = new Bicycle();
    console.log(b.isSchedulable(starting, ending));
}
