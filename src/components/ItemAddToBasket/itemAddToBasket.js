import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col
} from 'reactstrap';
import close from '../../assets/close.png'
import './ItemAddToBasket.css'
import Favorite from '../Favorites/Favorites'
import { AddToBasket } from '../Cart/store/cart.action'

const ItemAddToBasket = (props) => {
  console.log("props", props)
  const {
    openModal,
    closeModal,
    data,
    AddToBasket,
    addToCart,
    openFavourite,
  } = props;

  const AddToCart = (data) => {
    addToCart([data]);
    closeModal()
  }

  return (
    <>
      <div>
        <Modal isOpen={openModal} centered={true} size="md">
          <ModalHeader>
            <p className="modal-title">Add Item To Basket</p>
            <span onClick={closeModal} className="close modal-close">
              <img src={close} alt="" />
            </span>
          </ModalHeader>
          <ModalBody>
            <Card className="fav-card">
              <CardBody>
                <CardTitle>
                  <Row>
                    <Col md="6">
                      {data.title}
                    </Col>
                    <Col md="6" className="align-right">
                      £{data.price}
                    </Col>
                  </Row>
                </CardTitle>
                <CardSubtitle>{data.description}</CardSubtitle>
                <CardText className="fav-title">Choose Your Favourite</CardText>
                <CardText className="fav-link" onClick={() => openFavourite()}>Choose your second pizza</CardText>
              </CardBody>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button className="add-button" type="button" onClick={() => AddToCart(data)}>
              <Row>
                <Col md="6" className="align-left">
                  Add To Basket
                    </Col>
                <Col md="6" className="align-right">
                  £{data.price}
                </Col>
              </Row>
            </Button>
          </ModalFooter>
        </Modal>
      </div>

    </>
  );
}

const mapStateToProps = ({ DessertReducer }) => ({
  DessertReducerList: DessertReducer.dessertsList
});

const mapDispatchToProps = {
  AddToBasket
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemAddToBasket);
