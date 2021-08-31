import { configure } from "enzyme"
import { spy } from "sinon"
import { expect } from "chai"
let chai = require('chai')
chai.use(require('sinon-chai'))
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })

import { capitalize, evoluchain, shuffle } from '../helpers/frontHelpers'

export const data = {baby_trigger_item:null,chain:{evolution_details:[],evolves_to:[{evolution_details:[{gender:null,held_item:null,item:null,known_move:null,known_move_type:null,location:null,min_affection:null,min_beauty:null,min_happiness:null,min_level:16,needs_overworld_rain:false,party_species:null,party_type:null,relative_physical_stats:null,time_of_day:"",trade_species:null,trigger:{name:"level-up",url:"https://pokeapi.co/api/v2/evolution-trigger/1/"},turn_upside_down:false}],evolves_to:[{evolution_details:[{gender:null,held_item:null,item:{name:"moon-stone",url:"https://pokeapi.co/api/v2/item/81/"},"known_move":null,"known_move_type":null,"location":null,"min_affection":null,"min_beauty":null,"min_happiness":null,"min_level":null,"needs_overworld_rain":false,"party_species":null,"party_type":null,"relative_physical_stats":null,"time_of_day":"","trade_species":null,"trigger":{"name":"use-item","url":"https://pokeapi.co/api/v2/evolution-trigger/3/"},"turn_upside_down":false}],evolves_to:[],"is_baby":false,"species":{"name":"nidoking","url":"https://pokeapi.co/api/v2/pokemon-species/34/"}}],"is_baby":false,"species":{"name":"nidorino","url":"https://pokeapi.co/api/v2/pokemon-species/33/"}}],"is_baby":false,"species":{"name":"nidoran-m","url":"https://pokeapi.co/api/v2/pokemon-species/32/"}},"id":13}

describe('Front-End Helper Functions', () => {

    describe('Function capitalize()', () => {
        let str = 'something'
        let strn = '123hello'
        let n = 123456
        it('Capitalizes a string that we pass as an argument', () => {
            expect(capitalize(str)).to.be.a('string')
            expect(capitalize(str)[0]).to.equal(str[0].toUpperCase())
            expect(capitalize(str)[1]).to.equal(str[1])
        })
        it('Capitalizes a string with numbers as a string', () => {
            expect(capitalize(strn)).to.be.a('string')
            expect(capitalize(strn)).to.equal(strn)
        })
        it('It wont brake if we use numbers as argument', () => {
            expect(capitalize(n)).to.be.a('number')
            expect(capitalize(n)).to.equal(n)
        })
    })

    describe('Function evoluchain()', () => {
        const evoluchainSpy = spy(evoluchain)
        it('It should return the correct values', () => {
            expect(evoluchainSpy(data.chain)).to.deep.equal([ 'nidorino', 'nidoking' ])
        })
        it('It should call itself recursively', () => {
            expect(evoluchainSpy).to.have.calledOnce
        })
    })

    describe('Function shuffle()', () => {
        const numbers = [1,2,3,4,5,6]
        const letters = ['a','b','c','d']
        const shuffledN = shuffle(numbers)
        const shuffledL = shuffle(letters)
        it('It should return a different array', () => {
            expect(shuffledN).to.be.an('array')
            expect(shuffledN).to.not.equal([1,2,3,4,5,6])
            expect(shuffledL).to.not.equal(['a','b','c','d'])
            expect(shuffle(shuffledN)).to.not.equal([1,2,3,4,5,6])
        })
    })

})