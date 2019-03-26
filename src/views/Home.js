import React, { Component } from 'react';
import { connect, } from "react-redux";

import Login from '../components/Login';
import Products from '../components/Products';
import Navigation from '../components/Navigation';
import productsFetch from '../actions/productsAction';

export class HomeView extends Component {
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
    render() {
        const productProps = {
            product: this.props.product
        }
        return (
            <div>
                <Navigation onLogoutClick={this.handleLogout} />
                <Products {...productProps} />
            </div>
        );
    }
}
export const mapDispatchToProps = dispatch => {
    return {
        products: payload => dispatch(productsFetch(payload))
    };
};

export const mapStateToProps = state => ({
    product: state.products.product
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeView);
