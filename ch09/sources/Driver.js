export default class Driver {
    prepare_trip(trip) {
        const vehicle = trip.vehicle;
        gas_up(vehicle);
        fill_water_tank(vehicle);
    }

    gas_up(vehicle) {}

    fill_water_tank(vehicle) {}
}
