
import { Icon } from '@mui/material';
import './NavBar.css';

const NavBar = () => {
    return(
        <div className='nav'>
            
            <ul className='items'>
            <h1>Logo</h1>
            <li>
                <button className="boton">Nosotros</button>
            </li>
            <li>
                <button className="boton">Productos</button>
            </li>
            <li>
                <button className="boton">Contacto</button>
            </li>
            
            </ul>
            <Icon>Cart</Icon>
            
        </div>
    )    
}
export default NavBar
