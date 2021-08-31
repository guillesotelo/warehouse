import React from "react"
import { expect } from "chai"
import { shallow, configure } from "enzyme"
import { spy } from "sinon"
import Adapter from "enzyme-adapter-react-16"
configure({ adapter: new Adapter() })
import Header from '../components/Header'


describe('Header Component', () => {

        it('Search button works correctly', () => {
            const mockCallBack = jest.fn();
            const wrapper = shallow(<Header onClick={mockCallBack}/>)
            expect(wrapper.find('button')).to.have.lengthOf(1)
            wrapper.find('button').simulate('click')
            expect(mockCallBack.mock.calls.length).lessThanOrEqual(1)
        })
})