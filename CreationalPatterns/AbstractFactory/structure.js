class AbstractProductA { }
class AbstractProductB { }

class AbstractFactory {
    createProductA() { }
    createProductB() { }
}

class ProductA1 extends AbstractProductA { }
class ProductA2 extends AbstractProductA { }
class ProductB1 extends AbstractProductB { }
class ProductB2 extends AbstractProductB { }

class ConcreteFactory1 extends AbstractFactory {
    createProductA() { return new ProductA1(); }
    createProductB() { return new ProductB1(); }
}

class ConcreteFactory2 extends AbstractFactory {
    createProductA() { return new ProductA2(); }
    createProductB() { return new ProductB2(); }
}

module.exports = {
    AbstractProductA,
    AbstractProductB,
    AbstractFactory,
    ProductA1,
    ProductA2,
    ProductB1,
    ProductB2,
    ConcreteFactory1,
    ConcreteFactory2
};