// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
const uncleBobby = require('./6-alt-flavour');
require('./7-mind-grenade');

sayHi('Susan');
sayHi(john);
sayHi(peter);
sayHi(uncleBobby.singlePerson.name);
