import React from "react"
import { expect } from "chai"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })
import PokeCard from '../components/PokeCard'


describe('PokeCard Component', () => {

        it('Loading Pokemon Screen first', () => {
                const wrapper = shallow(<PokeCard poke={{name: 'pikachu'}} />)
                expect(wrapper.find('h3')).to.have.length(1)
        })
})