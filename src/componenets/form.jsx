// import {BrowserRoute,Route,Routes} from 'react-router-dom';

import { useState } from "react"
export default function Form(){
    const [name1,setName]=useState({firstname:"", lastname:""})
    return (
        <div>
            <h1>This is sample form page.</h1>
            <form action="">
                <div>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" value={name1.firstname} onChange={e=>setName({...name1,firstname:e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" value={name1.lastname} onChange={e=>setName({...name1,lastname:e.target.value})}/>
                </div>
                <div>
                    THis is firstname : {name1.firstname}<br></br>
                    This is lastname: {name1.lastname}
                </div>
            </form>
        </div>
    )
}