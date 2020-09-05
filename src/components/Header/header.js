import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Nav
} from 'reactstrap';
import { connect } from 'react-redux';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 1
        }
    }

    changeHeader(index, name, ref) {
        this.setState({
            activeIndex: index
        })
        this.props.changeHeader(name, ref)
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand className={this.state.activeIndex === 1 ? 'active' : ''} onClick={() => this.changeHeader(1, 'bundles', this.props.bundleRef)}>Bundles</NavbarBrand>
                    <NavbarBrand className={this.state.activeIndex === 2 ? 'active' : ''} onClick={() => this.changeHeader(2, 'starters', this.props.starterRef)}>Starters</NavbarBrand>
                    <NavbarBrand className={this.state.activeIndex === 3 ? 'active' : ''} onClick={() => this.changeHeader(3, 'dishes', this.props.mainDishesRef)}>Main Dishes</NavbarBrand>
                    <NavbarBrand className={this.state.activeIndex === 4 ? 'active' : ''} onClick={() => this.changeHeader(4, 'sides', this.props.sidesRef)}>Sides</NavbarBrand>
                    <NavbarBrand className={this.state.activeIndex === 5 ? 'active' : ''} onClick={() => this.changeHeader(5, 'desserts', this.props.dessertRef)}>Desserts</NavbarBrand>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = ({ }) => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
