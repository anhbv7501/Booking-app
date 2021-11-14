import { Grid } from "@material-ui/core";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";


function Cart(){


    return(
      <Grid  container  alignItems="center" direction="column">
        <GridItem item xs={10}>
            <div class="panel-heading" >SHOPPING CART</div>
            <table class="table">
              <thead>
                <tr>
                  <th style={{width:"45%"}}>Name</th>
                  <th style={{width:"10%",textAlign:"center"}}>Price</th>
                  <th style={{width:"8%",textAlign:"center"}}>Quantity</th>
                  <th style={{width:"22%",textAlign:"center"}}>Amount</th>
                  <th style={{width:"15%"}}>Thao tác</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>
                    <div className="row">
                      <div className="col-sm-2 hidden-xs"><img style={{width:"100%"}} src="https://cdn.bookingcare.vn/fr/w200/2021/01/14/160049-bs-hoai-huong.jpg"></img></div>
                      <div className="col-sm-10">Sản phẩm 1</div>
                    </div>
                  </td>
                  <td style={{textAlign:"center"}}>200.000đ</td>
                  <td>
                    <input className="form-control text-center" style={{width:"100%"}} type="number"/></td>
                  <td style={{textAlign:"center"}}>500.000đ</td>
                  <td>
                    <button class="btn btn-sm btn-danger">
                     Xóa
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="row">
                      <div className="col-sm-2 hidden-xs"><img style={{width:"100%"}} src="https://cdn.bookingcare.vn/fr/w200/2021/01/14/160049-bs-hoai-huong.jpg"></img></div>
                      <div className="col-sm-10">Sản phẩm 1</div>
                    </div>
                  </td>
                  <td style={{textAlign:"center"}}>200.000đ</td>
                  <td>
                    <input className="form-control text-center" style={{width:"100%"}} type="number"/></td>
                  <td style={{textAlign:"center"}}>500.000đ</td>
                  <td>
                    <button class="btn btn-sm btn-danger">
                     Xóa
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="row">
                      <div className="col-sm-2 hidden-xs"><img style={{width:"100%"}} src="https://cdn.bookingcare.vn/fr/w200/2021/01/14/160049-bs-hoai-huong.jpg"></img></div>
                      <div className="col-sm-10">Sản phẩm 1</div>
                    </div>
                  </td>
                  <td style={{textAlign:"center"}}>200.000đ</td>
                  <td>
                    <input className="form-control text-center" style={{width:"100%"}} type="number"/></td>
                  <td style={{textAlign:"center"}}>500.000đ</td>
                  <td>
                    <button class="btn btn-sm btn-danger">
                     Xóa
                    </button>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td><button className="btn btn-warning btn-block" style={{width:"50%"}}> Tiếp tục mua hàng</button></td>
                  <td colspan="2" className="hidden-xs"> </td> 
                  <td style={{textAlign:"center"}}><strong>Tổng tiền 500.000đ</strong></td>
                  <td><button className="btn btn-success btn-block">Thanh toán</button></td>
                </tr>
              </tfoot>
            </table>
              </GridItem>
              </Grid>
    );
}

export default Cart;