export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const evoluchain = (chain, arr=[]) => {
    if(chain.evolves_to.length){
        arr.push(chain.evolves_to[0].species.name)
        return evoluchain(chain.evolves_to[0], arr)
    }
    return arr
}