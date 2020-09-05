import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Row, Col,
    Card, CardBody, CardHeader, CardFooter, Button
} from 'reactstrap';


class Cart extends Component {


    render() {
        console.log('----this.props.CartReducerList', this.props.CartReducerList)
        return (
            <>
                <Card className="basket-container">
                    <CardHeader>Your Basket</CardHeader>
                    <CardBody>
                        {!this.props.CartReducerList && this.props.CartReducerList.length === 0 &&
                            < Row >
                                Your basket is empty
                            </Row>
                        }
                        {this.props.CartReducerList && this.props.CartReducerList.map(bundle => {
                            return (
                                <Row>
                                    <Col sm="6">
                                        <p> {bundle.title}</p>
                                    </Col>
                                    <Col sm="6" className="align-right">
                                        <p> £{bundle.price}</p>
                                    </Col>
                                </Row>
                            )
                        })}

                    </CardBody>
                    <CardFooter>
                        <Button className="checkout-button">
                            <Row>
                                <Col sm="6">
                                    Checkout
                                </Col>
                                <Col sm="6" className="align-right">
                                    £{this.props.CartAmount}
                                </Col>
                            </Row>
                        </Button>

                    </CardFooter>
                </Card>
            </>
        );
    }
}

const mapStateToProps = ({ CartReducer }) => ({
    CartReducerList: CartReducer.cartList,
    CartAmount: CartReducer.amountToPay
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
