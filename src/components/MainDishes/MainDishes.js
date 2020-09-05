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

class MainDishes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataToShow: false,
            mainDish: {}
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
        return (
            <>
                <h2 className="title">Main Dishes</h2>
                <Row>
                    {this.props.MainDishesReducerList && this.props.MainDishesReducerList.map(mainDish => {
                        return (
                            <Col sm="6">
                                <Card className="align-left" onClick={() => this.showAddToCart(mainDish)}>
                                    <CardBody>
                                        <CardTitle>{mainDish.title}</CardTitle>
                                        <CardSubtitle className="description">{mainDish.description}</CardSubtitle>
                                        <CardText className="price">£{mainDish.price}</CardText>
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

const mapStateToProps = ({ MainDishesReducer }) => ({
    MainDishesReducerList: MainDishesReducer.mainDishesList
});

const mapDispatchToProps = {
    AddToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDishes);
