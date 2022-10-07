import { NavLink } from 'react-router-dom'
import './NavBar.css';

export default function Navbar () {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active")

  return (
    <div className='navbar'>

      <div className='pokebola'></div>
      
      <div className='navlink'>
          <NavLink className={setActiveClass} end to='/'>
            Home
          </NavLink>
          {' - '}
          <NavLink className={setActiveClass} to='/pokemones'>
            Pokemones
          </NavLink>
      </div>
      
    </div>
  )
}