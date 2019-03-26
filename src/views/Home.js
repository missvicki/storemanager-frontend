import React, { Component } from 'react';
import { connect, } from "react-redux";

import Products from '../components/Products';
import Navigation from '../components/Navigation';
import {productsFetch} from '../actions/productsAction';
import {usersCreate} from '../actions/createUser';
import CreateUsers from '../components/CreateUsers';
import { removeUserError } from "../actions/index";

export class HomeView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: "",
            name: "",
            role: "",
            password: ""
        };
    }
    componentDidMount = () => {
        const url =
            "https://store-manager-ap1.herokuapp.com/api/v2/products";
        const payload = {
            url
        };
        this.props.products(payload);
    }

    handleLogout = (event) => {
        event.preventDefault();
        const token = localStorage.getItem("token");
        if (token) {
            if (confirm("Are you sure you want to logout?")) {
                localStorage.clear()
                this.props.history.push("/");
            }
        }
    }

    onSubmitHandler = e => {
        e.preventDefault();
        const { name, user_name, password, role } = this.state;
        const data = { name, user_name, password, role  };
        const url =
            "https://store-manager-ap1.herokuapp.com/api/v2/auth/signup";
        const payload = {
            data,
            history: this.props.history,
            url
        };
        this.props.usersCreate(payload); 
    };

    onDismissHandler = () => {
        const {
            dismissUserError
        } = this.props
        dismissUserError();
    };

    onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const productProps = {
            product: this.props.product
        }
        const createProps = {
            name: this.state.name,
            user_name: this.state.product_name,
            role: this.state.category,
            password: this.state.unit_price,
            onSubmitHandler: this.onSubmitHandler,
            onChangeHandler: this.onChangeHandler,
            onDismissHandler: this.onDismissHandler,
            loading: this.props.loading,
            userError: this.props.userError,
            userMessage: this.props.userMessage
        };

        return (
            <div>
                <Navigation onLogoutClick={this.handleLogout} />
                <CreateUsers {...createProps} />
                <Products {...productProps} />
            </div>
        );
    }
}
export const mapDispatchToProps = dispatch => {
    return {
        products: payload => dispatch(productsFetch(payload)),
        usersCreate: payload => dispatch(usersCreate(payload)),
        dismissUserError: () => dispatch(removeUserError())
    };
};

export const mapStateToProps = state => ({
    product: state.products.product,
    userError: state.users.userError,
    loading: state.users.loading,
    userMessage: state.users.userMessage
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);
