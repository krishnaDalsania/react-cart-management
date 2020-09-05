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


class Starters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataToShow: false,
            starter: {}
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
                <h2 className="title">Starters</h2>
                <Row>
                    {this.props.StarterReducerList && this.props.StarterReducerList.map(starter => {
                        return (
                            <Col sm="6">
                                <Card className="align-left" onClick={() => this.showAddToCart(starter)}>
                                    <CardBody>
                                        <CardTitle>{starter.title}</CardTitle>
                                        <CardSubtitle className="description">{starter.description}</CardSubtitle>
                                        <CardText className="price">£{starter.price}</CardText>

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

const mapStateToProps = ({ StarterReducer }) => ({
    StarterReducerList: StarterReducer.starterList
});

const mapDispatchToProps = {
    AddToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Starters);
