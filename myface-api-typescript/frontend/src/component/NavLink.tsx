import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './component.scss' // importing css file



export function NavLink() {
    return (
        <>
            <Link to="/posts" className="linktag">Posts</Link>
            <Link to="/users" className="linktag">Users</Link>
            <Link to="/users/58" className="linktag">UserDetail</Link>
        </>
    );
};