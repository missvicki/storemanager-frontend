import React, { Component } from 'react';
import { connect } from "react-redux";

import Login from '../components/Login';
import loginFetch from "../actions/loginAction"
import { removeLoginError } from "../actions/index";

export class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            password: "",
            role: "admin"
        };
    }

    onSubmitHandler = e => {
        e.preventDefault();
        const { user_name, password, role } = this.state;
        const data = { user_name, password, role };
        const url =
            "https://store-manager-ap1.herokuapp.com/api/v2/auth/login";
        const payload = {
            data,
            history: this.props.history,
            url
        };
        this.props.login(payload);
    };

    onDismissHandler = () => {
        const {
            dismissLoginError
        } = this.props
        dismissLoginError();
    };

    onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const loginProps = {
            user_name: this.state.user_name,
            password: this.state.password,
            role: this.state.role,
            loginError: this.props.loginError,
            onSubmitHandler: this.onSubmitHandler,
            onChangeHandler: this.onChangeHandler,
            onDismissHandler: this.onDismissHandler,
            loading: this.props.loading
        };
        return (
            <Login {...loginProps} />
        );
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        login: payload => dispatch(loginFetch(payload)),
        dismissLoginError: () => dispatch(removeLoginError())
    };
};

export const mapStateToProps = state => {
    return {
        loginError: state.login.loginError,
        loading: state.login.loading
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginView);
