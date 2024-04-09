
function Customer() {


    return (
        <>
        <br/>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor={'customerName'}>Customer Name</label>
                            <input type="text" className={'form-control'} id={'customerName'}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor={'customerAddress'}>Customer Address</label>
                            <input type="text" className={'form-control'} id={'customerAddress'}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor={'customerSalary'}>Salary</label>
                            <input type="number" className={'form-control'} id={'customerSalary'}/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <button className={'btn btn-primary col-12'}>Save Customer</button>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-12">
                        <form className={'col-12'}>
                            <input type="search" className={'form-control'} placeholder={'Search Customers here'}/>
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
                                <td>Customer Name</td>
                                <td>Address</td>
                                <td>Salary</td>
                                <td>Delete Option</td>
                                <td>Update Option</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>#1001</td>
                                <td>Nimal Bandara</td>
                                <td>Colombo</td>
                                <td>25000.00</td>
                                <td>
                                    <button className={'btn btn-outline-danger btn-sm'}>Delete</button>
                                </td>
                                <td>
                                    <button className={'btn btn-outline-success btn-sm'}>Update</button>
                                </td>
                            </tr>
                            <tr>
                                <td>#1002</td>
                                <td>Kasun Nuwantha</td>
                                <td>Matara</td>
                                <td>35000.00</td>
                                <td>
                                    <button className={'btn btn-outline-danger btn-sm'}>Delete</button>
                                </td>
                                <td>
                                    <button className={'btn btn-outline-success btn-sm'}>Update</button>
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

export default Customer;