// Accepts a string and returns the capitalized version of the string

const formatName = (name) => {
    let splitName = name.trim().split(' ')

    let capitalizeName = splitName.map((name) => (
        name[0].toUpperCase() + name.slice(1, name.length).toLowerCase()
    ))

    return capitalizeName.join(' ')
}

console.log(formatName('  udhe austine '))
console.log(formatName('  udHE aUstinE  '))
console.log(formatName('  udhe austine ogaga  '))
