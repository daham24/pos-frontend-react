import React, { useEffect, useState } from "react";
import axios from "axios";

interface Customer {
    _id: string,
    name: string,
    address: string,
    salary: number
}

const Customer: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [salary, setSalary] = useState<number | ''>('');

    useEffect(() => {
        findAllCustomers();
    }, []);

    const findAllCustomers = async () => {
        const response = await axios.get('http://localhost:3000/api/v1/customers/findAll');
        setCustomers(response.data)
    };

    const deleteCustomer = async (id) => {
        try {
            // Send DELETE request with the customer ID as a parameter
            await axios.delete('http://localhost:3000/api/v1/customers/deleteById/'+id)
            findAllCustomers();

        } catch (error) {
            console.log('Error deleting customer:', error);

            alert('An error occurred while deleting the customer. Please try again later.');
        }
    };

    const loadModel = async (id) => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/customers/findById/${id}`);
            const customer = response.data;
            console.log(customer);
        } catch (error) {
            console.log('Error loading customer:', error);
            alert('An error occurred while loading the customer details. Please try again later.');
        }
    };


    const saveCustomer = async () => {
        try {
            const response = await axios.post('http://localhost:3000/api/v1/customers/create', {
                name, address, salary
            });
            console.log(response);
            findAllCustomers();
            setName('');
            setAddress('');
            setSalary('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor={'customerName'}>Customer Name</label>
                            <input value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} type="text" className={'form-control'} id={'customerName'}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor={'customerAddress'}>Customer Address</label>
                            <input value={address} onChange={(e) => {
                                setAddress(e.target.value)
                            }} type="text" className={'form-control'} id={'customerAddress'}/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className="form-group">
                            <label htmlFor={'customerSalary'}>Salary</label>
                            <input value={salary} onChange={(e) => {
                                setSalary(e.target.value == '' ? '' : parseFloat(e.target.value))
                            }} type="number" className={'form-control'} id={'customerSalary'}/>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-12">
                        <button onClick={saveCustomer} className={'btn btn-primary col-12'}>Save Customer</button>
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
                {customers.length > 0 ? (
                    <table className={'table table-hover table-bordered'}>
                        <thead>
                        <tr>
                            <th>#Id</th>
                            <th>Customer Name</th>
                            <th>Address</th>
                            <th>Salary</th>
                            <th>Delete Option</th>
                            <th>Update Option</th>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer, index) => (
                            <tr key={index}>
                                <td>#{index}</td>
                                <td>{customer.name}</td>
                                <td>{customer.address}</td>
                                <td>{customer.salary}</td>
                                <td>
                                    <button
                                        onClick={()=>{
                                            if (confirm('Are you sure?')){
                                                deleteCustomer(customer._id)
                                            }}}
                                        className={'btn btn-outline-danger btn-sm'}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={()=>{
                                        loadModel(customer._id)
                                    }} className={'btn btn-outline-success btn-sm'}>Update</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                ) : (
                    <div>No customers found.</div>
                )}
            </div>
        </>
    );
};

export default Customer;
