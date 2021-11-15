import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList } from "../../redux/reducer/ProductSlide";
import ProductCreateModal from "./ProductCreateModal";
import image from "../../assets/img/user1.png";
function ProductIndex() {

    const ProductList = useSelector((state) => state.product.value);
    const dispatch = useDispatch();

    const [list,setList] = useState([{}]);
    useEffect(() => {
        dispatch(getList());
        setList(ProductList);
        console.log(list);
    },[dispatch]);

    return (
        <div className="container">
            
            <div className="row">
                <aside className="col-sm-3">
                    <div className="card text-center">
                        <div className="card-header">Tat ca danh muc</div>
                        <div className="list-group list-group-flush">
                            <a className="list-group-item">Kinh mat</a>
                            <a className="list-group-item">Kinh mat</a>
                            <a className="list-group-item">Kinh mat</a>
                            <a className="list-group-item">Kinh mat</a>
                        </div>
                    </div>

                </aside>
                <article className="col-sm-9 ">

                    <div className="row">
                        <div><b className="btn">Sap xep theo</b></div>
                        <div><a className="btn">Moi nhat</a></div>
                        <div><a className="btn">Ban chay</a></div>
                        <div>
                        <select className="form-control" placeholder="Gia" >
                            <option selected>Gia</option>
                            <option>Gia:Cao den thap</option>
                            <option>Gia:Thap den cao</option>
                        </select>
                        </div>
                    </div>

                    <div className="row my-3 ">
                    
                            {
                                ProductList.map((item,index) => {
                                    return (
                                        <div className="col-sm-3 py-3">
                                        <div className="card">
                                            <a><img src={image} className="card-img-top" alt="Card image cap" height="125" max-width="80%"></img></a>
                                            <div className="card-body">
                                                <div className="card-title">{item.ten}</div>
                                                <p className=" card-text float-left">{item.gia}</p>
                                                <button className="btn btn-success float-right">add</button>
                                            </div>    
                                        </div>
                                    </div> 
                                    )
                                })
                            }
                            
                    </div>
    
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
                    <div className="input-group mb-3 col-4">
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
                </article>
            </div>
        </div>
    );
}

export default ProductIndex;