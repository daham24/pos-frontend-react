import React from "react";

function Order() {
    const styleObj:React.CSSProperties={
        marginBottom:'20px'
    }
    const bottomContext:React.CSSProperties={
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }
    const totalText:React.CSSProperties={
        color:'red',
        margin:'0'
    }

    return (
        <>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor={'product'}>Select Customer</label>
                            <select id="product" className={'form-control'}>
                                <option value="#" disabled selected>Use Options</option>
                                <option value="#">Customer 1</option>
                                <option value="#">Customer 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor={'customerName'}>Customer Name</label>
                            <input type="text" className={'form-control'} id={'customerName'} disabled/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor={'customerAddress'}>Customer Address</label>
                            <input type="text" className={'form-control'} id={'customerAddress'} disabled/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor={'customerAddress'}>Salary</label>
                            <input type="number" className={'form-control'} id={'salary'} disabled/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3" style={styleObj}>
                        <div className="form-group">
                            <label htmlFor={'product'}>Select Product</label>
                            <select id="product" className={'form-control'}>
                            <option value="#" disabled selected>Use Options</option>
                                <option value="#">Product 1</option>
                                <option value="#">Product 2</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="form-group">
                            <label htmlFor={'description'}>Product Description</label>
                            <input type="text" className={'form-control'} id={'description'} disabled/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                        <div className="form-group">
                            <label htmlFor={'price'}>Unit Price</label>
                            <input type="number" className={'form-control'} id={'price'} disabled/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                        <div className="form-group">
                            <label htmlFor={'qtyOnHand'}>QTY On Hand</label>
                            <input type="number" className={'form-control'} id={'qtyOnHand'} disabled/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-2">
                        <div className="form-group">
                            <label htmlFor={'qty'}>QTY</label>
                            <input type="number" className={'form-control'} id={'qty'}/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <button className={'btn btn-primary col-12'}>+ Add Product</button>
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
                                <td>Unit Price</td>
                                <td>QTY</td>
                                <td>Total</td>
                                <td>Delete Option</td>

                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>P-1001</td>
                                <td>Wireless Bluetooth Earbuds</td>
                                <td>200 units</td>
                                <td>20</td>
                                <td>$150.00</td>
                                <td>
                                    <button className={'btn btn-outline-danger btn-sm'}>Remove</button>
                                </td>


                            </tr>
                            </tbody>

                        </table>

                        <br/>
                        <div className="bottom-context" style={bottomContext}>
                            <div className="total-outer">
                                <h1 style={totalText}>Total : $150.00</h1>
                            </div>
                            <div className="place-order-button-context">
                                <button className={'btn btn-primary'}>Place Order</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order;