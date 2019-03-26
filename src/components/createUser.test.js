import React from 'react';
import { mount } from 'enzyme';

import CreateUsers from './CreateUsers';

describe('Create Users', () => {
    const onChangeHandler = jest.fn();
    const onDismissHandler = jest.fn();
    const onSubmitHandler = jest.fn();

    const userProps = {
        user_name: "",
        name: "",
        role: "",
        password: "",
        onDismissHandler: onDismissHandler,
        userError: "",
        userMessage: "",
        loading:false,
        onSubmitHandler: onSubmitHandler,
        onChangeHandler: onChangeHandler
    }
    const createUser = mount(<CreateUsers {...userProps}/>)
    
    it('should render the Create User Component', () => {
        expect(createUser).toMatchSnapshot();
    });
});
