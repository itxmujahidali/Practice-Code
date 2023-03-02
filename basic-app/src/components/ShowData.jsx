import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowData = () => {

    const [data, setdata] = useState([]);
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');


    function getData() {

        axios.get("https://63ff76bc9f844910297eee5b.mockapi.io/basic-react")
            .then((response) => {
                setdata(response.data)
            });

    }


    const handleDelete = (id) => {
        axios.delete(`https://63ff76bc9f844910297eee5b.mockapi.io/basic-react/${id}`)
            .then(() => {
                getData();
            })
    }

    const handleUpdate = (id, name, desc) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("desc", desc);

    }

    useEffect(() => {
        getData();
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://63ff76bc9f844910297eee5b.mockapi.io/basic-react",
            {
                name,
                desc,
            }).then(()=>{
                getData();
            });
        setName("");
        setDesc("");
        
    };


    return (
        <>

            <h3 align='center' className='mt-5'>CRUD OPERATION</h3>
            <div style={{ marginLeft: "20%", marginRight: "20%" }}>

                <div className="mb-3 mt-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">NAME</label>
                    <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">DESCRIPTION</label>
                    <textarea className="form-control" value={desc} onChange={(e) => { setDesc(e.target.value) }} rows="3" placeholder='Enter your descriptiom'></textarea>
                </div>
                <div align='center'>
                    <input type='submit' className="btn btn-success" onClick={handleSubmit} />
                </div>
            </div>
            {

                data.map((element) => {
                    return (
                        <div className='mt-3' style={{ marginLeft: "20%", marginRight: "20%" }} key={element.id} >
                            <div className="card text-bg-info mb-3" style={{ maxWidth: "45rem" }}>
                                <div className="card-header">#{element.id}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{element.name}</h5>
                                    <p className="card-text">{element.desc}</p>
                                </div>

                            </div>
                            < div className='mb-5'>
                                <Link to="/update">
                                    <button onClick={() => handleUpdate(
                                        element.id,
                                        element.name,
                                        element.desc
                                    )} type='button' className="btn btn-primary" >
                                        Update
                                    </button>
                                </Link>

                                <button onClick={() => { handleDelete(element.id) }} style={{ marginLeft: "10px", }} type='button' className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                    );

                })
            }
        </>
    )

}

export default ShowData