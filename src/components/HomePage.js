import React from 'react'
import { Link } from 'react-router-dom';
import { AmplifySignOut } from '@aws-amplify/ui-react';
const HomePage = () => {
    return (
        <div>
            <header>
            <AmplifySignOut/>
         </header>
         
           <div  className='categorie'>
           <Link to='/categorie'>
           <div className='Categories'>Acction</div>
           </Link>
           <div className='Categories'>Categories</div>
            <div className='Categories'>
            Categories
            </div>
            <div className='Categories'>
            Categories
            </div>
            <div className='Categories'>
            Categories
            </div>
            <div className='Categories'>
            Categories
            </div>
            <div className='Categories'>
            Categories
            </div>
            <div className='Categories'>
            Categories
            </div>
            <div className='Categories'>
            Categories
            </div>
            <div className='Categories'>
            Categories
            </div>
           
           </div>
        </div>
    )
}

export default HomePage
