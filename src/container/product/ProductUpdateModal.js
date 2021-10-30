

function ProductUpdateModal(){



    return (
        <div>

            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={"abclassName"}
                size="lg"
                centered
            >
                <ModalHeader toggle={() => { this.toggle() }}>Cap Nhat Hoc Sinh</ModalHeader>
                <ModalBody>
                    <div className="container form-group" >
                        <div className="row">
                            <div className="col-6 ">
                            <label>Ten Hoc Sinh</label>
                                <input type="text" className="form-control" placeholder="Ten Hoc Sinh"
                                    onChange={(event) => { this.handleOnChangeInput(event, "name") }}
                                    value={this.state.name} />
                            </div>
                            <div className="col-6">
                                <label>Lop</label>
                                <select className="form-control"
                                    placeholder="Chon Lop"
                                    value={this.state.lop.ten}
                                    onChange={(event) => { this.handleOnChangeLopInput(event) }}>

                                    {this.props.listLop.map((item, index) => {
                                        return (
                                            <option key={index} value={item.ten} disabled={this.isFullLop(item)} >{item.ten}</option>
                                        )
                                    }
                                    )}
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <label>Ngay Sinh</label>
                                <input type="date" className="form-control" placeholder="Ngay Sinh"
                                    onChange={(event) => { this.handleOnChangeInput(event, "ngaySinh") }}
                                    value={this.state.ngaySinh} />
                            </div>
                            <div className="col-6">
                                <label>Que Quan</label>
                                <input type="text" className="form-control" placeholder="Que Quan"
                                    onChange={(event) => { this.handleOnChangeInput(event, "queQuan") }}
                                    value={this.state.queQuan} />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => { this.toggle() }}>Huy</Button>
                    <Button color="primary" onClick={() => { this.handleUpdateHS() }}>Cap Nhat</Button>
                </ModalFooter>
            </Modal>
        </div>
    );

}