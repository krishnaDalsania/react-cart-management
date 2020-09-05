import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import ItemAddToBasket from '../ItemAddToBasket/itemAddToBasket';
import Favorite from '../Favorites/Favorites'
import { AddToBasket } from '../Cart/store/cart.action'

class Dessert extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataToShow: false,
            dessert: {}
        }
    }

    addToCart = (item) => {
        console.log('-----item', item)
        this.props.AddToBasket(item)
    }

    showAddToCart = (starter) => {
        this.setState({
            dataToShow: true,
            starter
        })
    }

    closeModal = () => {
        this.setState({
            dataToShow: false
        })
    }

    openFavourite = () => {
        this.setState({
            showFavPopup: true,
            dataToShow: false
        })
    }

    closeFavorite = () => {
        this.setState({
            showFavPopup: false
        })
    }

    render() {
        console.log('----this.props.dessertsList', this.props.DessertReducerList)
        return (
            <>
                <h2 className="title">Dessert</h2>
                <Row>
                    {this.props.DessertReducerList && this.props.DessertReducerList.map(dessert => {
                        return (
                            <Col sm="6">
                                <Card className="align-left" onClick={() => this.showAddToCart(dessert)}>
                                    <CardBody>
                                        <CardTitle>{dessert.title}</CardTitle>
                                        <CardSubtitle className="description">{dessert.description}</CardSubtitle>
                                        <CardText className="price">£{dessert.price}</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                {this.state.dataToShow &&
                    <ItemAddToBasket
                        openModal={this.state.dataToShow}
                        data={this.state.starter}
                        closeModal={this.closeModal}
                        openFavourite={this.openFavourite}
                        addToCart={this.addToCart}
                    />
                }
                {
                    this.state.showFavPopup &&
                    <Favorite
                        openModal={this.state.showFavPopup}
                        closeModal={this.closeFavorite}
                        data={this.state.starter}
                        addToCart={this.addToCart}
                    />
                }
            </>
        );
    }
}

const mapStateToProps = ({ DessertReducer }) => ({
    DessertReducerList: DessertReducer.dessertsList
});

const mapDispatchToProps = {
    AddToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Dessert);
