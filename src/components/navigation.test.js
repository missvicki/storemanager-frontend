import React from 'react';
import { shallow } from 'enzyme';

import Navigation from './Navigation';

describe('Navigation', () => {
    const props = {
        onLogoutClick: () => {}
    };
    
    const nav = shallow(<Navigation {...props}/>);
    it('should render the Navigation Component', () => {
        expect(nav).toMatchSnapshot();
    });
});
