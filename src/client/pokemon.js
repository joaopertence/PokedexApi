class Pokemon {

    constructor(id, name, specie, types, image) {
        this.id = id;
        this.name = name;
        this.specie = specie;
        this.types = types;
        this.image = image;
    }

    setId(id) {
        this.id = id;
    }

    setName(name) {
        this.name = name;
    }

    setSpecie(specie) {
        this.specie = specie;
    }

    setType(types) {
        this.types = types;
    }

    setImage(image) {
        this.image = image;
    }

}

export default Pokemon;