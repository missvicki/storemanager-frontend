import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Routes from './routes';

it('renders without crashing', () => {
    const div= document.createElement('div');
    ReactDOM.render(<Routes />, div);
    ReactDOM.unmountComponentAtNode(div);
});
