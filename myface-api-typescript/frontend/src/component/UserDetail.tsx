import { useEffect, useState } from "react"; // import React (to provide access to TSX)
import { UserModel} from  "../models/api/userModel"
import './component.scss' // importing css file
import { Link } from "react-router-dom";
// import { format } from "date-fns";


export function UserDetail() {

    const [user58,setUser58] =useState<UserModel | undefined>(undefined)
 useEffect(() => {
    async function apiUsercall(){
     try{
         const response = await fetch("http://localhost:3001/users/58");
         const apiData = await response.json();
         setUser58(apiData)
         return apiData;
     }catch(error){
         console.log(`---> Cannot Fecth Data from the API$ `);
         console.log(error);
     }
 }
 apiUsercall();
}, []);


  if(!user58)
  {
    return (<p> Gettig data</p>)
  }

    return (
        <>
        <div className="flexContainer">
        <div className="profileContainer">
            <img className="coverImage" src={user58.coverImageUrl} alt="profile cover image" /> 
            <div className="transparentDiv"></div>
            <img className="profileImage" src= {user58.profileImageUrl} alt="profile image"/> 
            <h3>{user58.name}</h3>
            <div className="profileInfo">
                <p className="profileName">{user58.username}</p>
                <p className="profileEmail">{user58.email}</p>
            </div>
        </div>
        <h2 className="subtitle"> {user58.name}'s Posts</h2>
            <ol className="postsContainer">
            { user58.posts.map((post) => (    
                <li className="postContainer">
                    <img className="postImage" src={post.imageUrl } alt="post cover image"/>
                    <div className="postInfo">
                        <p className="postUsername"> { user58.username } </p>
                        <p className="postMessage">{ post.message }</p>
                    </div>
                </li>
             ) ) }
            </ol>    
        <div className="buttonContainer">
            <button>Load More</button>  
            <Link to="/" className="linktag">HomePage</Link>
        </div>    
    </div>
        </>
        
         );
       };
       