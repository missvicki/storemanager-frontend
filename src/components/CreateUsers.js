import React from 'react';
import { Modal, Message, Button, Container, Form } from 'semantic-ui-react';


const CreateUsers = (props) => {
    const {
        name,
        user_name,
        role,
        password,
        onSubmitHandler,
        onChangeHandler,
        onDismissHandler,
        loading,
        userError,
        userMessage,
        handleChange
    } = props

    const userErorMsg = (
        <Message
            negative
            error
            header='Error!!!'
            content={userError}
            onDismiss={onDismissHandler}
            style={{ width: "50%", margin: "auto", color: "red" }}
        />
    );

    const userMsg = (
        <Message
            positive
            success
            content={userMessage}
            onDismiss={onDismissHandler}
            header='Success!!!'
            style={{ width: "50%", margin: "auto", color: "green" }}
        />
    );

    const roles = [{
        key: 1,
        text: "admin",
        value: "amin",
    }, {
        key: 2,
        text: "attendant",
        value: "attendant",
    },]


    return (
        <div>
            <Container textAlign="right">
                <br />
                <Modal trigger={<Button basic color='teal'>Create Users</Button>}>
                    <Modal.Header>Create a new User</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form onSubmit={onSubmitHandler} success error>
                                {userMessage ? userMsg : null}
                                {userError ? userErorMsg : null}
                                <br />
                                <Form.Field>
                                    <input
                                        type="text"
                                        placeholder="First name, Last Name"
                                        name="name"
                                        value={name}
                                        onChange={onChangeHandler}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        name="user_name"
                                        value={user_name}
                                        onChange={onChangeHandler}
                                    />
                                </Form.Field>
                                <Form.Select
                                    placeholder='Select roles'
                                    options={roles}
                                    name="role"
                                    onChange={handleChange}
                                />
                                <Form.Field>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        onChange={onChangeHandler}
                                    />
                                </Form.Field>
                                <Form.Button type="submit" style={{ background: "teal", color: "white" }} loading={loading}>Create User</Form.Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>

            </Container>
        </div>
    );
}

export default CreateUsers;
