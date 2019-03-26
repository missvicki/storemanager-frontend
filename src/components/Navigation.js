import React from 'react';
import { Menu, Header} from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div>
            <Menu secondary style={{ background: "teal" }}>
                <Menu.Item header style={{ margin: "0 auto" }}>
                    <NavLink to="/">
                        <Header as="h1" textAlign="center" padded="very" style={{ color: "white" }}>Store Manager</Header>
                    </NavLink>
                </Menu.Item>
                <Menu.Menu position='right' style={{ margin: "0 auto" }}>
                    <Menu.Item
                        style={{ color: "white", textSize: "3em" }}
                        name='logout'
                        onClick={props.onLogoutClick}
                    />
                </Menu.Menu>
            </Menu>
        </div>
    );
};

export default Navigation;