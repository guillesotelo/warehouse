import React from "react"
import { expect } from "chai"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })
import SinglePoke from '../components/SinglePoke'
import Header from '../components/Header'


describe('SinglePage Component', () => {

        it('Loading Pokemon Screen first', () => {
                const wrapper = shallow(<SinglePoke poke={{name: 'pikachu'}}/>)
                expect(wrapper.find('h1')).to.have.length(1)
        })
        it('Renders Header', () => {
                const wrapper = shallow(<SinglePoke poke={{name: 'pikachu'}} />)
                expect(wrapper.find(Header)).to.have.length(1)
        })
})