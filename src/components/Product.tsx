import React from "react";

function Product() {

    const styleObj:React.CSSProperties={
        marginBottom:'20px'
    }

    return (
        <>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor={'productName'}>Product Name</label>
                            <input type="text" className={'form-control'} id={'productName'}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor={'qty'}>QTY On Hand</label>
                            <input type="number" className={'form-control'} id={'qty'}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor={'unitPrice'}>Unit Price</label>
                            <input type="number" className={'form-control'} id={'unitPrice'}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor={'image'}>Product Image</label>
                            <input type="file" className={'form-control'} id={'image'}/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label htmlFor={'description'}>Description</label>
                            <textarea rows={5} className={'form-control'} id={'description'}/>
                        </div>
                    </div>

                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <button className={'btn btn-primary col-12'}>Add Product</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <form className={'col-12'}>
                            <input type="search" className={'form-control'} placeholder={'Search Product here'}/>
                        </form>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <table className={'table table-hover table-bordered'}>
                            <thead>
                            <tr>
                                <td>#Id</td>
                                <td>Product Name</td>
                                <td>QTY On Hand</td>
                                <td>Unit Price</td>
                                <td>Delete Option</td>
                                <td>Update Option</td>
                                <td>See more</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>P-1001</td>
                                <td>Wireless Bluetooth Earbuds</td>
                                <td>200 units</td>
                                <td>$29.99</td>
                                <td>
                                    <button className={'btn btn-outline-danger btn-sm'}>Delete</button>
                                </td>
                                <td>
                                    <button className={'btn btn-outline-success btn-sm'}>Update</button>
                                </td>
                                <td>
                                    <button className={'btn btn-outline-info btn-sm'}>View</button>
                                </td>
                            </tr>
                            <tr>
                                <td>P-1002</td>
                                <td>Stainless Steel Water Bottle</td>
                                <td>300 units</td>
                                <td>$15.99</td>
                                <td>
                                    <button className={'btn btn-outline-danger btn-sm'}>Delete</button>
                                </td>
                                <td>
                                    <button className={'btn btn-outline-success btn-sm'}>Update</button>
                                </td>
                                <td>
                                    <button className={'btn btn-outline-info btn-sm'}>View</button>
                                </td>
                            </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;