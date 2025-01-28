import React from 'react'; 
import { Link } from 'react-router-dom';


function Header() {
    return (
         <header>
             <h1 id='titolo'>Questa è una pagina dedicata al parcheggio</h1> 
             
            <div>
                 <ul>
                     <li><Link to={'/'}>Home</Link></li>
                     <li><Link to={'/Parking'}>About Parking</Link></li> 
                     <li><Link to={'/AdminPage'}>Admin</Link></li>
                     
                </ul> 
              <div className='striscia-verticale'></div> 
               <nav>
               <Link to={'/UserPage'} className='user-button'><button>Register</button></Link>
               
               </nav>

        
            </div> 
        </header> ); }
export default Header;

