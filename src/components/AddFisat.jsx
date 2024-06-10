import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddFisat = () => {
    const [data,setData]=useState(
        {
            "firstname":" ",
            "lastname":" ",
            "college":" ",
            "dob":" ",
            "course":" ",
            "mobile":" ",
            "email":" ",
            "address":" "
        }
    )
    const inputHandler =(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue =()=>{
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status ==  "success") {
                    alert("Successfully added")
                    
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                alert.apply(error.message)
              }
        )
    }
  return (
    <div>
        <Navbar/>
        <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYB2Sm9iRIw76S2u7QYCk2cAcv3I295pBcFw&s" height="300px" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUPYmIjsOW7yu4kR5plA4sS41JD7P4HqnZjqTcun8PSBUy3haINvHZ9LPYTnMKXizGcT4&usqp=CAU" height="300px" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://i.ytimg.com/vi/mDGjdjTR30k/maxresdefault.jpg" height="300px" className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">First Name</label>
                        <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Last Name</label>
                    <input type="text" id="" className="form-control" name= 'lastname' value={data.lastname} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">College</label>
                    <textarea className="form-control" name='college' value={data.college} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">DoB</label>
                    <input type="date"  className="form-control" name='dob' value={data.dob} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Course</label>
                    <select name="course" id="" className="form-control" value={data.course} onChange={inputHandler}>
                        <option value="MCA">MCA</option>
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                    </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Mobile No</label>
                    <input type="text" className="form-control" name='mobile' value={data.mobile} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Address</label>
                    <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler}/>
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