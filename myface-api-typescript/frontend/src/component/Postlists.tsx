import  {useEffect, useState } from "react"; // import React (to provide access to TSX)
import { PostModel } from "../models/api/postModel";
import './component.scss' // importing css file
import { Link } from 'react-router-dom'


export function Postlists() {
  const [posts, setPosts] = useState<PostModel[]>([])
  useEffect(() => {
    async function apiPostscall(){
     try{
         const response = await fetch("http://localhost:3001/posts");
         const apiData = await response.json();
         setPosts(apiData.results)
         return apiData;
     }catch(error){
         console.log(`---> Cannot Fecth Data from the API$ `);
         console.log(error);
     }
 }
 apiPostscall();
}, []);
return (
    <>{posts &&
      <>
    <div className="flexContainer" id="flexContainer">
    <h1 className="subtitle">Posts</h1>
    <Link to="/" className="linktag">HomePage</Link>
    <ol className="postsContainer">
      { posts.map((post) => (
        <li className="postContainer">
              <div className="postInfo">
                  <h2>{post.message}</h2>
              </div>
              <img src = { post.imageUrl } alt = "picture illustrating blogpost" />
              <div className="postInfo">
                <p> Posted by: {post.postedBy.name } - { post.postedBy.username } - { post.postedBy.email }</p>
            </div>  
            <p>Liked by {post.likedBy.length} users:</p>
            <p>Disliked by {post.dislikedBy.length} users:</p>
          </li>
        )) }
        </ol>
        {/* <PageTemplate   {...posts}/> */}
       </div> 
       </>
       }
   </>
  );
};




