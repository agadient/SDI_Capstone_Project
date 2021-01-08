import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow,configure } from 'enzyme';
import App from '../App';

configure({adapter: new Adapter()});

test('the page gets displayed', () => {
    const wrapper = shallow(<App/>);

    
expect(wrapper.find('input')).toBeDefined();
})