class Director {
    #builder = new Set();
    construct() { this.#builder.forEach(builder => builder.buildPart()); }
}

class Builder {
    buildPart() { }
}

class Product { }

class ConcreteBuilder extends Builder {
    buildPart() { new Product(); }
    getResult() { }
}

module.exports = {
    Director,
    Builder,
    ConcreteBuilder,
    Product
};