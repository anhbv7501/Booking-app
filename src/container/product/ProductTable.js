import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../redux/reducer/ProductSlide";
import ProductCreateModal from "./ProductCreateModal";


function ProductTable() {

    const [openAddModal,setOpenAddModal] = useState(false);
    const ProductList = useSelector((state) => state.product.value);
    const dispatch = useDispatch();
    const [deleteP,setDeleteP] = useState({});
    const [modal, setModal] = useState(false)
    const [list, setList] = useState([{}]);
    useEffect(() => {
        dispatch(getList());
        setList(ProductList);
        console.log(list);
    }, [dispatch]);


     function openModal(item){
        setDeleteP(item)
        console.log(item)
    }

    function toggleModal(){
        setOpenAddModal(!openAddModal)
    }

    return (
        <div className="container">
            <h3>All Product</h3>

            {/* ModalAddProduct */}

            <ProductCreateModal
           
            openAddModal={openAddModal}
            toggleModal={toggleModal}
            />

            <div className="modal fade" id="deleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle" >Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Bạn có muốn xóa sản phẩm {deleteP.ten}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            {/* //ListProduct */}
            <div className="row form-group">
                <div className="col-sm-10">
                    <div className="row">
                        <div className=" col-sm-3">
                            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                        </div>
                        <div className="col-sm-3">
                            <select className="form-control custom-select ">
                                <option value=""></option>
                            </select>
                        </div>
                        <div className="col-sm-1">
                        <button type="submit" className="form-control btn btn-primary"><i className="fas fa-search-plus"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <button className="btn btn-success " onClick={() => toggleModal()}><i className="fas fa-plus-circle"></i></button>
                </div>
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Ten</th>
                            <th>Gia</th>
                            <th>Loai</th>
                            <th>Anh</th>
                            <th>Thao Tac</th>
                        </tr>
                    </thead>
                    {
                        ProductList.lenghth === 0 ?
                        <h3>Không có bản ghi nào</h3> 
                        :
                        <tbody>
                        {
                            ProductList.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.ten}</td>
                                        <td>{item.gia}</td>
                                        <td>Loai chua co</td>
                                        <td>{item.image}</td>
                                        <td>
                                            <button className="btn btn-primary mx-2" 
                                            onClick={() => openModal(item)}><i className="fas fa-edit"></i></button>
                                            <button className="btn btn-danger" data-toggle="modal" data-target="#deleteModal"
                                            onClick={() => openModal(item)}><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                )
                            }
                            )
                        }
                    </tbody>
            }
                </table>
            </div>
            <div className="container">
                <div className="row">
                    <nav aria-label="Page navigation example" className="col-5">
                        <ul className="pagination">
                            <li className="page-item"><a className="page-link">First Page</a></li>
                            <li className="page-item">
                                <a className="page-link" aria-label="Previous" >
                                    <span aria-hidden="true">&laquo;</span>
                                    <span className="sr-only">Previous</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" >1/1</a></li>
                            <li className="page-item">
                                <a className="page-link" aria-label="Next" >
                                    <span aria-hidden="true">&raquo;</span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link">Last Page</a></li>
                        </ul>
                    </nav>
                    <div className="input-group mb-3 col-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text">Rows per pages</label>
                        </div>
                        <select className="form-control" id="inputGroupSelect01" >
                            <option defaultValue="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTable;