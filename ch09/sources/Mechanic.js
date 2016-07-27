export default class Mechanic {
    prepare_trip(trip) {
        for (bicycle of trip.bicycles) {
            this.prepare_bicycle(bicycle);
        }
    }

    prepare_bicycle(bicycle) {}
}
