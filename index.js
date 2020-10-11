const isAPrime = () => {
    let number = parseInt(document.getElementById(`isAPrime`).value)
    let prime = check(number)
    if (prime === true) {
        result(`${number} is a Prime Number`)
    } else if (prime === undefined) {
        result(`${number} is neither Prime nor Composite`)
    } else {
        result(`${number} is a Composite Number`)
    }
}

const listPrimesUpto = () => {
    let number = parseInt(document.getElementById(`listPrimesUpto`).value)
    let primes = []
    for (let i = 0; i < number; i++) {
        if (check(i)) {
            primes.push(i)
        }
    }

    if (primes.length !== 1) {
        result(primes.join(`, `), `${primes.length} prime numbers found`)
    } else {
        result(primes[0], "1 prime number found")
    }
}

const listPrimes = () => {
    let amount = parseInt(document.getElementById(`listPrimes`).value)
    let primes = []
    for (let i = 0; primes.length < amount; i++) {
        if (check(i)) {
            primes.push(i)
        }
    }
    result(primes.join(`, `), `Listing ${amount} primes`)
}

const allFactors = () => {
    let number = parseInt(document.getElementById(`allFactors`).value)
    let factors = []
    for (let i = 0; i < number; i++) {
        if (number % i === 0) {
            factors.push(i)
        }
    }

    if (factors.length !== 1) {
        result(factors.join(`, `), `${factors.length} factors found`)
    } else {
        result(factors[0], "1 factor found")
    }
}

const primeFactors = () => {
    let number = parseInt(document.getElementById(`primeFactors`).value)
    let primeFactors = []
    for (let i = 0; i < number; i++) {
        if (number % i === 0 && check(i)) {
            primeFactors.push(i)
        }
    }

    if (primeFactors.length !== 1) {
        result(primeFactors.join(`, `), `${primeFactors.length} prime factors found`)
    } else {
        result(primeFactors[0], "1 prime factor found")
    }
}

const check = (number) => {
    if (number === 1 || number === 0) {
        return undefined
    }

    for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true
}

const result = async (HTML, description) => {
    let content = document.createElement("pre")
    content.innerHTML = HTML
    await swal({
        icon: "info",
        title: "Result",
        text: description,
        content: content,
    })
}