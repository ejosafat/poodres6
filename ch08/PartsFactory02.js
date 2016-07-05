import Parts from './Parts02.js';

class PartsFactory {
    static build(config, parts_class = Parts) {
        return new parts_class(config.map(part_config => this.create_part(part_config)));
    }

    static create_part(part_config) {
        return {
            name: part_config[0],
            description: part_config[1],
            needs_spare: (typeof part_config[2] === 'undefined') ? true : part_config[2],
        };
    }
}

export default PartsFactory;

if (require.main == module) {
    const road_config = [
        ['chain', '10-speed'],
        ['tire_size', '23'],
        ['tape_color', 'red'],
    ];
    const mountain_config = [
        ['chain', '10-speed'],
        ['tire_size', '2.1'],
        ['front_shock', 'Manitou', false],
        ['rear_shock', 'Fox'],
    ];

    const road_parts = PartsFactory.build(road_config);
    console.log(road_parts);
    const mountain_parts = PartsFactory.build(mountain_config);
    console.log(mountain_parts);
}
