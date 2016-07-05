class Part {
    constructor({name, description, needs_spare = true}) {
        this.name = name;
        this.description = description;
        this.needs_spare = needs_spare;
    }
}

export default Part;
