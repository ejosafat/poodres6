export default class Schedule {
    isScheduled(schedulable, start_date, end_date) {
        console.log(`This ${schedulable.constructor.name} is not scheduled
                 between ${start_date} and ${end_date}`);
        return false;
    }
}

