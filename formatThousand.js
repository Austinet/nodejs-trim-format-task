// Accepts a number and returns the number formatted with commas as thousands separators

const formatThousand = (num) => {
    let formatNum = ''
    let numString = num.toString()
    let numLength = numString.length

    for (let index = 0; index < numLength; index++) {
        if (index > 0 && (numLength - index) % 3 === 0) {
            formatNum += ','
        }
        formatNum += numString[index]
    }

    return formatNum
}

console.log(formatThousand(10000000))
console.log(formatThousand(1000045))
console.log(formatThousand(1000))
console.log(formatThousand(100))
