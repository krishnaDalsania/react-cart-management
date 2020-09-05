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

class Bundles extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataToShow: false,
            bundle: {}
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

    backClick = () => {
        this.setState({
            showFavPopup: false,
            dataToShow: true
        })
    }

    render() {
        console.log('----this.props.bundleList', this.props.BundleReducerList)
        return (
            <>
                <h2 className="title">Bundles</h2>
                <Row>
                    {this.props.BundleReducerList && this.props.BundleReducerList.map(bundle => {
                        return (
                            <Col sm="6">
                                <Card className="align-left" onClick={() => this.showAddToCart(bundle)}>
                                    <CardBody>
                                        <CardTitle>{bundle.title}</CardTitle>
                                        <CardSubtitle className="description">{bundle.description}</CardSubtitle>
                                        <CardText className="price">£{bundle.price}</CardText>
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
                        backClick={this.backClick}
                    />
                }
            </>
        );
    }
}

const mapStateToProps = ({ BundleReducer }) => ({
    BundleReducerList: BundleReducer.bundleList
});

const mapDispatchToProps = {
    AddToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(Bundles);
