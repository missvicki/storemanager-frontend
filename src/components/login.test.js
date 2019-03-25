import React from 'react';
import { mount } from 'enzyme';

import Login from './Login';

describe('Login', () => {
    const onChangeHandler = jest.fn();
    const onDismissHandler = jest.fn();
    const onSubmitHandler = jest.fn();

    const loginProps = {
        user_name: "",
        password: "",
        onDismissHandler: onDismissHandler,
        loginError: "",
        loading:false,
        onSubmitHandler: onSubmitHandler,
        onChangeHandler: onChangeHandler
    }
    const login = mount(<Login {...loginProps}/>)
    
    it('should render the Login Component', () => {
        expect(login).toMatchSnapshot();
    });

    it("calls onSubmitHandler when form is submited", () => {
        login.find("form").simulate("submit");
        expect(onSubmitHandler).toHaveBeenCalled();
    });

    it("calls onChandeHandler when the username or password input is changed", () => {
        login.find('input[name="user_name"]').simulate("change");
        expect(onChangeHandler).toHaveBeenCalled();
        login.find('input[name="password"]').simulate("change");
        expect(onChangeHandler).toHaveBeenCalled();
    });
});
