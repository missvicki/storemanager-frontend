import React from 'react';
import { shallow } from 'enzyme';

import Products from './Products';

const props = {
    products: []
};

const products = shallow(<Products {...props}/>);

describe('Products', () => {
    it('should render the Product Component', () => {
        expect(products).toMatchSnapshot();
    });
});
