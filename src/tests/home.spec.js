import React from "react"
import { expect } from "chai"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import PokeCard from '../components/PokeCard'


describe('Home Component', () => {

        it('Renders Welcome Screen at first', () => {
            const wrapper = shallow(<Home/>)
            expect(wrapper.find(Welcome)).to.have.lengthOf(1)
        })
        it('Renders Header & Pagination after Welcome Screen', () => {
                const wrapper = shallow(<Home/>)
                setTimeout(() => expect(wrapper.find(Header)).to.have.lengthOf(1), 3500)
                setTimeout(() => expect(wrapper.find(Pagination)).to.have.lengthOf(1), 3500)
        })
        it('Renders the PokeCards pulled from API', () => {
                const wrapper = shallow(<Home/>)
                setTimeout(() => expect(wrapper.find(PokeCard)).to.have.length.above(1), 3500)
        })
})