import React from 'react';
import { Message, Header, Form, Grid, Segment } from 'semantic-ui-react';

import '../styles/login.css'

const Login = (props) => {
    const {
        user_name,
        password,
        loginError,
        onSubmitHandler,
        onChangeHandler,
        onDismissHandler,
        loading
    } = props
    const loginErorMsg = (
        <Message
            negative
            content={loginError}
            onDismiss={onDismissHandler}
            style={{ width: "50%", margin: "auto", color: "red" }}
        />
    );

    return (
        <div style={{ padding: "10% 0" }} className="loginPage">
            <Grid columns={2} stackable>
                <Grid.Column width={4}></Grid.Column>
                <Grid.Column width={8} padded="very">
                    <Segment padded="very" color="teal">
                        <Header as="h1" textAlign="center" padded="very">Store Manager</Header>
                        <Header as="h6" style={{ color: "#008080", marginTop: "5px", textAlign: "center", fontSize: "1em" }}>
                            Log in to your account
                        </Header>
                        <br />
                        {loginError ? loginErorMsg : null}
                        <br />
                        <center>
                            <Form onSubmit={onSubmitHandler}>
                                <Form.Field>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        name="user_name"
                                        value={user_name}
                                        onChange={onChangeHandler}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={onChangeHandler}
                                    />
                                </Form.Field>
                                <Form.Button type="submit" style={{ background: "teal", color: "white" }} loading={loading}>Sign in</Form.Button>
                            </Form>
                        </center>
                    </Segment>

                </Grid.Column>
            </Grid>

        </div>
    )
};

export default Login;
