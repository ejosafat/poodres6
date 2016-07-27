export default class Trip {
    prepare(preparers) {
        for (const preparer of preparers) {
            preparer.prepare_trip(this);
        }
    }
}
