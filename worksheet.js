const characters = [
    {
        name: 'Luke Sky walker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// MAP
// Get an array of all names
name = characters.map(character => character.name);
console.log(name);
// Get an array of all heights
height = characters.map(character => character.height);
console.log(height);
// Get an array of objects with just name and height properties
name_height = characters.map(character => ({name: character.name, height: character.height}));
console.log(name_height);
console.log(name_height[0]);
// Get an array of all first names
first_name= characters.map(character => character.name.split(' ')[0]);
console.log(characters[0].name.split(' ').length)
console.log(characters[0].name.split(' '))
console.log(first_name);