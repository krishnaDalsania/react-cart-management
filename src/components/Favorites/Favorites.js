import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
  Card, CardBody, CardTitle, CardSubtitle, CardText, Row, Col, Nav,
  NavItem, NavLink, TabContent, TabPane, Form, FormGroup, Label, Input
} from 'reactstrap';
import close from '../../assets/close.png'
import classnames from 'classnames';
// import '../ItemAddToBasket/itemAddToBasket.css'

const Favorite = (props) => {
  console.log("props", props)
  const {
    openModal,
    closeModal,
    data,
    FavoriteReducerList,
    ExtrasReducerList,
    addToCart,
    backClick
  } = props;

  const [selectedVals, setSelectedVals] = useState([]);

  const [activeTab, setActiveTab] = useState('1');

  const [cartArray, setCart] = useState([])

  const [favArray, setFav] = useState([])

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const addToBasket = () => {
    console.log('cartData extras', cartArray)
    console.log('-------------favArray', favArray)
    addToCart([data, ...cartArray, ...favArray])
    closeModal()
  }

  const setFavorite = (favorite) => {
    console.log('---------fav', favorite)
    setFav([favorite])
    toggle('2');
  }

  const handleChangeCheckbox = (e, obj) => {
    console.log(e.target.checked)
    console.log(e.target.value, typeof e.target.value)
    console.log(e.target.name)

    if (e.target.checked) {
      let temp = selectedVals
      temp.push(e.target.value)
      setSelectedVals(temp)
      setCart([...cartArray, obj])
    } else {
      let index = selectedVals.indexOf(e.target.value.title);
      let temp = selectedVals
      temp.splice(index, 1);
      let cartData = cartArray
      cartData.splice(index, 1)
      setSelectedVals(temp)
      setCart(cartData)
    }
    console.log("selectedVals", selectedVals)
  }

  return (
    <>
      <div>
        <Modal isOpen={openModal} centered={true} size="md">
          <ModalHeader>
            <p className="modal-title"><i onClick={backClick} class="arrow left"></i>Choose Your Favorite</p>
            <span onClick={closeModal} className="close modal-close">
              <img src={close} alt="" />
            </span>
          </ModalHeader>

          <ModalBody>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '1' })}
                  onClick={() => { toggle('1'); }}
                >Pizza
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: activeTab === '2' })}
                  onClick={() => { toggle('2'); }}
                >
                  Extra
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <Form>
                      <FormGroup check>

                        {
                          FavoriteReducerList && FavoriteReducerList.map(favorite => {
                            return (
                              <Row>
                                <Label check>
                                  <Col md="2">
                                    <Input type="radio" name="radio1" onClick={() => setFavorite(favorite)} />{' '}
                                  </Col>
                                  <Col md="6">
                                    {favorite.title}
                                    <div className="description">
                                      {favorite.description}
                                    </div>
                                  </Col>
                                  <Col md="4" className="align-right">
                                    <img />
                                  </Col>
                                </Label>
                              </Row>
                            )
                          })
                        }

                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <Form>
                      <FormGroup check>

                        {
                          ExtrasReducerList && ExtrasReducerList.map(favorite => {
                            return (
                              <Row>
                                <Label check>
                                  <Col md="2">
                                    <Input type="checkbox" name="checkbox" value={favorite.title} onClick={(e) => { toggle('2'); handleChangeCheckbox(e, favorite) }} />{' '}
                                  </Col>
                                  <Col md="7">
                                    {favorite.title}
                                    <div className="description">
                                      {favorite.description}
                                    </div>
                                  </Col>
                                  <Col md="3" className="align-right">
                                    <img />
                                  </Col>
                                </Label>
                              </Row>
                            )
                          })
                        }

                      </FormGroup>
                    </Form>
                  </Col>
                </Row>
              </TabPane>
            </TabContent>

          </ModalBody>
          <ModalFooter>
            <Button className="add-button" type="button" onClick={() => addToBasket()}>
              Add To Basket
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

const mapStateToProps = ({ FavoriteReducer }) => ({
  FavoriteReducerList: FavoriteReducer.favoriteList,
  ExtrasReducerList: FavoriteReducer.extrasList
});

// const mapDispatchToProps = {
// };

export default connect(mapStateToProps, {})(Favorite);