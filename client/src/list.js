import { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.css';
import Login from './login';

function List() {

  const [testList, setTestList] = useState([]);

  useEffect(() => {
    Axios.get('https://5f1a8228610bde0016fd2a74.mockapi.io/getTestList').then((response) => {
    console.log("ln 23", response.data);
    setTestList(response.data);
    });
  }, []);

  return (
    <div className="list">
      <label htmlFor="search" style={{margin:"10px", padding:"10px" }}>Search</label>
      <input type="text" onChange={(e) => {}} ></input>

      {testList.map((val, idx) => {
  return (
      <div >
          <li key={idx} style={{ margin: "10px", padding: "10px" }}>{val.url}</li>
      </div>)
    })} 
    </div>
)
}
    
  

export default List;
