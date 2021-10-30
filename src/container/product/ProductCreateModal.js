import React, { useEffect,useState } from "react";
import { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { getList } from "../../redux/reducer/ProductSlide";

class ProductCreateModal extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  toggle = () => {
    this.props.toggleModal();
}
  render(){
    return (

      <div>

          <Modal
              isOpen={this.props.openAddModal}
              toggle={() => { this.toggle() }}
              className={"addProduct"}
              size="lg"
              centered
          >
              <ModalHeader >Them Hoc Sinh</ModalHeader>
              <ModalBody>
                  <div className="container form-group" >
                      <div className="row">
                          <div className="col-6 ">
                              <input type="text" className="form-control" placeholder="Ten San Pham" />
                          </div>
                          <div className="col-6">
                              <select className="form-control"
                                  placeholder="Chon Loai San Pham"
                                  value="">
                              </select>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-6">
                              <input type="number" className="form-control" placeholder="Price"/>
                          </div>
                          <div className="col-6">
                              <input type="text" className="form-control" placeholder="Image"/>
                          </div>
                      </div>
                  </div>
              </ModalBody>
              <ModalFooter>
                  <Button color="primary" onClick={() => { this.toggle()}}>Huy</Button>
                  <Button color="secondary">Them</Button>
              </ModalFooter>
          </Modal>
      </div>
  );
  }
}
export default ProductCreateModal;