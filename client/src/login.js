import { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';

function Login() {

const [userName, setUserName] = useState('');    

useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
        console.log(response.data);
        setUserName(response.data);
    });
}, []);

const login = () => {    
Axios.post('http://localhost:3001/api/insert', {//pass from frontend to the backend
    userName: userName
}).then(() => {
    alert('successful');
})}    

return (
    <div className="App">
        <h1>NETMED APPLICATION</h1>
        <div className='form'>
            <label>Enter your Name</label>
            <input type="text" name="userName" onChange={(e) => {
                setUserName(e.target.value)
            }} />

            <button onClick={login}>Login</button>
        </div>
    </div>
)
}

export default Login;
