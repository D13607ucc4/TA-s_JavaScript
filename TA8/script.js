
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

function findTheOldest(people){
    let mayorEdad = 0
    let persona = ''
    for (let i = 0; i < people.length; i++){
        let edad = people[i].yearOfDeath - people[i].yearOfBirth
        if (mayorEdad < edad) {
            mayorEdad = edad
            persona = people[i].name
        }
    }

    return persona
}


console.log('La persona con mayor edad es ' + findTheOldest(people))