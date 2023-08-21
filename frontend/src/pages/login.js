import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {IP_ADDRESS} from './config'


export default function Login() {


    const [data, setData] = useState({
        username: "",
    })

    const loginUser = async (e) => {
        e.preventDefault()
        const {username} = data
        try {
            const {data} = await axios.post(IP_ADDRESS + ':8000/login', {
                username,
            });
            if(data.error){
                toast.error(data.error)
            } else {
                setData({});
                toast.success("User Exists")
            }
        } catch (error) {
            
        }
    }

    return (
        <>
            <div className="d-flex flex-column align-items-center mx-auto align-middle p-5 vh-100 justify-content-center" >
                <div>
                    <h2>Connection Tester</h2>
                </div>
                <form className="d-flex flex-column align-items-center p-5" onSubmit={loginUser}>
                    <label className='p-4'>

                        Enter "Lygos" to Test
                        &nbsp;&nbsp;&nbsp;&nbsp;

                        <input type="text" name="username" value={data.username} onChange={(e) => setData({...data, username: e.target.value})}/>
                    </label>
                    <button type="submit">Confirm</button>
                </form>
            </div>
        </>
    )
}