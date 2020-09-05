import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header/header'
import Bundles from '../Bundles/bundles'
import Starters from '../Starters/Starters'
import MainDishes from '../MainDishes/MainDishes'
import Sides from '../Sides/Sides';
import Dessert from '../Desserts/desserts'
import './container.css'
import {
    Row, Col
} from 'reactstrap'
import Cart from '../Cart/Cart';

class Container extends Component {
    constructor(props) {
        super(props)
        this.bundleRef = React.createRef()
        this.starterRef = React.createRef()
        this.mainDishesRef = React.createRef()
        this.sidesRef = React.createRef()
        this.dessertRef = React.createRef()
    }

    changeHeader = (name, ref) => {
        console.log('----change header click', name)
        console.log('----ref', ref)
        window.scrollTo(0, ref.current.offsetTop)
    }

    render() {
        return (
            <div>
                <div className="header">
                    <Header
                        changeHeader={this.changeHeader}
                        bundleRef={this.bundleRef}
                        starterRef={this.starterRef}
                        mainDishesRef={this.mainDishesRef}
                        sidesRef={this.sidesRef}
                        dessertRef={this.dessertRef}
                    />
                </div>
                <div className="content">
                    <Row>
                        <Col md="8">
                            <div ref={this.bundleRef}>
                                <Bundles />
                            </div>
                            <div ref={this.starterRef}>
                                <Starters />
                            </div>
                            <div ref={this.mainDishesRef}>
                                <MainDishes />
                            </div>
                            <div ref={this.sidesRef}>
                                <Sides />
                            </div>
                            <div ref={this.dessertRef}>
                                <Dessert />
                            </div>
                        </Col>
                        <Col md="4">
                            <div>

                                <Cart />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ }) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
