import { Postlists } from './component/Postlists'
import { UserDetail } from './component/UserDetail'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { NavLink } from './component/NavLink'
import './component/component.scss'
import { Users } from './component/Users'
import { MyForm } from './form'


function App() {

  return (
    <div >
  <Router >
    <p className='title'>Myface api- Typescript</p>
    <Routes>
    <Route path="*" element={<NavLink />}/>
    <Route path="/posts" element={<Postlists /> }/>
    <Route path="/users" element={<Users /> }/>
    <Route path="/users/58" element={<UserDetail /> }/>
    <Route path="/users/create" element={<MyForm />}/>

    </Routes>
</Router>
  </div>
  )
}

export default App



