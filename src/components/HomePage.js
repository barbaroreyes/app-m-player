import React from 'react'
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';
const HomePage = (props) => {
    return (
        <div>
            <header>
            <AmplifySignOut/>
         </header>
           <div  className='categorie'>
           <Link to='/categorie'><div className='Categories'>Action</div></Link>
           <Link to='/categorie'><div className='Categories'>Anime</div></Link>
           <Link to='/categorie'><div className='Categories'>Black Stories</div></Link>
           <Link to='/categorie'><div className='Categories'>Children & family</div></Link>
           <Link to='/categorie'><div className='Categories'>History</div></Link>
           <Link to='/categorie'><div className='Categories'> Romance</div></Link>
           <Link to='/categorie'><div className='Categories'>Sports</div></Link>
           <Link to='/categorie'><div className='Categories'>LGBTQ</div></Link>
           <Link to='/categorie'><div className='Categories'>Horror</div></Link>
           <Link to='/categorie'><div className='Categories'>International</div></Link>
           
           </div>
        </div>
    )
}

export default HomePage
