import React, { useState } from 'react'
import Navbar from './Navbar'

const AddFisat = () => {
    const [data,setData]=useState(
        {
            "fname":" ",
            "lname":" ",
            "college":" ",
            "dob":" ",
            "course":" ",
            "mob":" ",
            "email":" ",
            "address":" ",
        }
    )
    const inputHandler =(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">First Name</label>
                        <input type="text" className="form-control" name='fname' value={data.name} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Last Name</label>
                    <input type="text" id="" className="form-control" name= 'lname' value={data.name} onchange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">College</label>
                    <textarea name="college" id="" className="form-control" value={data.college} onchange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">DoB</label>
                    <input type="date"  className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Course</label>
                    <select name="course" id="" className="form-control" value={data.course} onchange={inputHandler}>
                        <option value="">MCA</option>
                        <option value="">BCA</option>
                        <option value="">BBA</option>
                    </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Mobile No</label>
                    <input type="text" className="form-control" name='mob' value={data.mob} onchange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" name='mob' value={data.email} onchange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Address</label>
                    <textarea name="address" id="" className="form-control" value={data.address} onchange={inputHandler}></textarea>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Submit</button>
                    </div>
                </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default AddFisat