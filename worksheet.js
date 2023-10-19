const characters = [
    {
        name: 'LukeSky walker',
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
nameHeight = characters.map(character => ({name: character.name, height: character.height}));
console.log(nameHeight);
console.log(nameHeight[0]);
// Get an array of all first names
firstName= characters.map(character => character.name.split(' ')[0]);
console.log(characters[0].name.split(' ').length)
console.log(characters[0].name.split(' '))
console.log(firstName);

// REDUCE
// Get the total mass of all characters
totalMass = characters.reduce((acc, cur) => acc + parseInt(cur.mass),0);
console.log(totalMass);
// Get the total height of all characters
totalHeight = characters.reduce((acc, cur) => acc + parseInt(cur.height),0);
console.log(totalHeight);
// Get the total number of characters in all the character names
totalNamesChar = characters.reduce((acc, cur) => acc + cur.name.length,0);
console.log(totalNamesChar);
// Get the total number of characters by eye color (hint. a map of eye color to count)
totalNamesCharByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if(acc[color]){
        acc[color]++;
    } else {
        acc[color] = 1;
    }
    return acc;
}, {})
console.log(totalNamesCharByEyeColor);

// FILTER
// Get characters with mass greater than 100
massGreater100 = characters.filter(character => character.mass > 100);
console.log(massGreater100);
console.log(massGreater100[0]);
// Get characters with height less than 200
heightLesser200 = characters.filter(character => character.height < 200);
console.log(heightLesser200);
// Get all male characters
allMale = characters.filter(character => character.gender === 'male');
console.log(allMale);
console.log(allMale[0]);
// Get all female characters
allFemale = characters.filter(character => character.gender === 'female');
console.log(allFemale[0]);

// SORT
// Sort by name
name = characters.sort((a, b) => {
    if(a.name < b.name)return 1;
    return -1;
});
console.log(name);
// Sort by mass
mass = characters.sort((a, b) => a.mass - b.mass);
console.log(mass);
// Sort by height
height = characters.sort((a, b) => a.height - b.height);
console.log(height);
// Sort by gender
gender = characters.sort((a, b) => {
    if (a.gender === "female") {
        return 1;
    }
    return -1;
});
console.log(gender);

// EVERY
// Does every character have blue eyes?
charBlueEyes = characters.every( character =>  character.eye_color === 'blue' );
console.log(charBlueEyes);
// Does every character have mass more than 40?
massMoreThan40 = characters.every(character => character.mass > 40);
console.log(massMoreThan40);
// Is every character shorter than 200?
shorterThan200 = characters.every(character => character.height < 200);
console.log(shorterThan200);
// Is every character male?
everyMale = characters.every(character => character.gender === 'male');
console.log(everyMale);

// SOME
// Is there at least one male character?
alLeastAMale = characters.some(character => character.gender === 'male');
console.log(alLeastAMale);
// Is there at least one character with blue eyes?
atLeastAWithBlueEye = characters.some(character => character.gender === 'female');
console.log(atLeastAWithBlueEye);
// Is there at least one character taller than 200?
atLeastTaller200 = characters.some(character => character.height > 200);
console.log(atLeastTaller200);
// Is there at least one character that has mass less than 50?
atLeastLessThan50 = characters.some(character => character.mass > 50);
console.log(atLeastLessThan50);