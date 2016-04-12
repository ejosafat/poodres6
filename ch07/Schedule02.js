import Schedule from './Schedule01.js'

const schedule = {
    schedule() {
        return this._schedule || (this._schedule = new Schedule());
    },

    isSchedulable(start_date, end_date) {
        return !this.isScheduled(substractDays(start_date, this.lead_days()), end_date);
    },

    isScheduled(start_date, end_date) {
        return this.schedule().isScheduled(this, start_date, end_date);
    },

    lead_days() {
        return 0;
    }
}

const scheduleMixin = Define(schedule);

function substractDays(date, days) {
    date.setDate(date.getDate() - days);
    return date;
}

// This function was created by Reg “raganwald” Braithwaite
// http://raganwald.com/2015/12/31/this-is-not-an-essay-about-traits-in-javascript.html
function Define (behaviour) {
    const instanceKeys = Reflect.ownKeys(behaviour);

    return function define (classConstructor) {
        for (let property of instanceKeys) {
            if (!classConstructor.prototype[property]) {
                Object.defineProperty(classConstructor.prototype, property, {
                    value: behaviour[property],
                    writable: true
                });
            }
        }
    }
}

export default scheduleMixin;
