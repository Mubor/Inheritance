
function Organism() {}
Organism.prototype.isAlive = function() {
    return this.age > 110 ? false : true
}

function Creature() {}
Creature.prototype = Object.create( Organism.prototype );
Creature.prototype.getAge = function() {
    return this.age;
}

function Person() {}
Person.prototype = Object.create( Creature.prototype );
Person.prototype.sayHi = function() {
    return `Hello, ${this.name}`; 
}

function Boy( name, age ) {
    this.name = name;
    this.age = age;
    this.favoriteColor = "blue";
}

Boy.prototype = Object.create( Person.prototype );
Boy.prototype.getFavoriteColor = function () {
    return this.favoriteColor;
};

function Girl( name, age ) {
    this.name = name;
    this.age = age;
    this.favouriteColor = "pink";
}

Girl.prototype = Object.create( Person.prototype );
Girl.prototype.getFavouriteColor = function () {
    this.favouriteColor;
};
