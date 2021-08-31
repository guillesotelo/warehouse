export const capitalize = str => typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : str

export const evoluchain = (chain, arr=[]) => {
    if(chain.evolves_to.length){
        arr.push(chain.evolves_to[0].species.name)
        return evoluchain(chain.evolves_to[0], arr)
    }
    return arr
}

export const shuffle = arr => {
    let current = arr.length, rand
    while (0 !== current) {
        rand = Math.floor(Math.random() * current)
        current--
        [arr[current], arr[rand]] = [
            arr[rand],
            arr[current],
        ]
    }
    return arr
}