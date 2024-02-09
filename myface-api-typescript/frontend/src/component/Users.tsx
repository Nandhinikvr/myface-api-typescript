import './component.css' // importing css file
import { useEffect, useState } from "react"; // import React (to provide access to TSX)
import { UserModel} from  "../models/api/userModel"
import './component.scss' // importing css file
import { Link } from 'react-router-dom';


export function Users() {
    const [users, setUsers] = useState<UserModel[]>([])
  useEffect(() => {
    async function apiPostscall(){
     try{
         const response = await fetch("http://localhost:3001/users");
         const apiData = await response.json();
         // console.log(apiData.results)
         setUsers(apiData.results)
         return apiData;
     }catch(error){
         console.log(`---> Cannot Fecth Data from the API$ `);
         console.log(error);
     }
 }
 apiPostscall();
}, []);
    return (
        <>
         <div className="flexContainer" id="flexContainer">
         <h1 className="subtitle">Users</h1>
         <Link to="/" className="linktag">HomePage</Link>

        <ol >
            { users.map((users) => (
            <li className="users">
              {users.name}          
          </li>
       
        )) }
        </ol>
       </div> 
         
        </>
    );
};