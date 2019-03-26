import React from 'react';
import { Header, Table, Container } from 'semantic-ui-react';


const renderProducts = (data) => {
    const productArray = data.product;
    if (productArray) {
        return productArray.map(product => (
            <Table.Row key={product.product_id}>
                <Table.Cell>{product.product_name}</Table.Cell>
                <Table.Cell>{product.category}</Table.Cell>
                <Table.Cell>{product.unit_price}</Table.Cell>
                <Table.Cell>{product.quantity}</Table.Cell>
            </Table.Row>
        ));
    }
};

const Products = props => {
    return (
        <div>
            <Container>
                <br />
                <Header as="h1" textAlign="center" padded="very" style={{ color: "gray" }}>Products</Header>
                <Table unstackable>
                    <Table.Header>
                        <Table.HeaderCell>Product Name</Table.HeaderCell>
                        <Table.HeaderCell>Category</Table.HeaderCell>
                        <Table.HeaderCell>Unit Price</Table.HeaderCell>
                        <Table.HeaderCell>Quantity</Table.HeaderCell>
                    </Table.Header>
                    <Table.Body>
                        {renderProducts(props)}
                    </Table.Body>
                </Table>
            </Container>
        </div>
    );
};

export default Products;
