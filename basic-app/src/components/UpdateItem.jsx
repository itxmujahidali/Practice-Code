import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const UpdateItem = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    
    const navigate = useNavigate();
    
    const handleUpdate = (e) =>{
        e.preventDefault();
        axios.put(`https://63ff76bc9f844910297eee5b.mockapi.io/basic-react/${id}`, 
        {
            name: name,
            desc: desc,
        }).then(()=>{
            navigate("/");
        })
    }

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setDesc(localStorage.getItem('desc'));
    }, [])
    

    return (
        <>
            <h3 align='center' className='mt-5'>Update Data</h3>
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
                    <input type='submit' className="btn btn-success" onClick={handleUpdate} />
                </div>
            </div>
        </>
    )
}

export default UpdateItem