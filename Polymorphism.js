//polymorphism in js code(OOP)


class Bird{
      constructor(age) {
     }
     sing(){
              console.log("pakhi gaan gai");
     }
}


class Crow extends Bird{
      constructor(age) {
              super();
     }
     sing(){
              console.log("Ka Ka Ka");
     }
}

class Cukkoo extends Bird{
      constructor(age) {
              super();
     }
     sing(){
              console.log("Ku Ku Ku");
     }
}

class Parrot extends Bird{
      constructor(age) {
              super();
     }
}


var birds = [];

var kak = new Crow();
birds.push(kak);

var kokil = new Cukkoo();
birds.push(kokil);

var tiya = new Parrot();
birds.push(tiya);

for(var i = 0; i < birds.length; i++){
	var bird = birds[i];
	bird.sing();
}
