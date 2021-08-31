import React from "react"
import { expect } from "chai"
import { shallow, configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom'
import Evolutions from '../components/Evolutions'

describe('Evolutions Component', () => {

        afterEach(cleanup)

        it('Loading Pokemon Screen first', () => {
                const wrapper = shallow(<Evolutions/>)
                expect(wrapper.find('h1')).to.have.length(1)
        })
})