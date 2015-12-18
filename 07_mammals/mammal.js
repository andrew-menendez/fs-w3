

var Mammal = function(name) {
    
    this.offspring=[]
    
    this.name=name
    
}
Mammal.prototype.atype='Mammal'

Mammal.prototype.sayHello = function() {
    
    return "My name is " + this.name + ", I'm a " + this.atype
};

// Mammal class should have a haveBaby function

Mammal.prototype.haveBaby = function() {
    var childname="Baby " + this.name
    var child= new Mammal(childname)
    this.offspring.push(child)
    console.log(childname)
    return child
};

//Cat

var Cat = function(name,color) {
    Mammal.call(this,name);
    this.color=color
};

//should use Object.create to inherit methods from Mammal

Cat.prototype = Object.create(Mammal.prototype);

// What is the constructor property? We did not cover this in the lecture video. So I noticed. 

Cat.prototype.constructor= Cat;
// the above was seen on the first slide of http://www.objectplayground.com/
// I suppose we need this because "When the prototype is replaced, the constructor is lost. The interpreter doesn’t keep it."
// and "If we want to have the right constructor after inheritance - we need to set it by our own.
// from http://javascript.info/tutorial/constructor

Cat.prototype.haveBaby = function(color){

	var childname="Baby " + this.name
    var child= new Cat(childname,color)
    this.offspring.push(child)
    //console.log(childname)
    return child

};


/*
	So interestingly if you do something like :

	Cat.haveBaby = function (color) { etc}; 

	then the green cat will be created with the mammal.haveBaby method, not the Cat method.
*/


