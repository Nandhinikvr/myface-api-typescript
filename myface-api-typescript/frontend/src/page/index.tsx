import '../component/component.scss' // importing css file
import { Page } from "../models/page";
import { UserModel } from "../models/api/userModel";
import { PostModel } from "../models/api/postModel";
import { Link } from 'react-router-dom';
import React from 'react';

export const PageTemplate: React.FC<Page<PostModel |UserModel>>= (props) =>{
    return (
        <>
        {props.next && <Link to={props.next}> next</Link>
         }
         {props.previous && <Link to={props.previous}> next</Link>
         }

        </>

    );
}