import React from 'react';
import { Link } from 'react-router-dom';

const LandinPage = () => {
    return (
        <header className='br2 ma2'>
          <div>
          <Link to='/home'>Login</Link>
           <h1>Welcome</h1>
          </div>
           <div className='anuncios'>
               <div className='anuncios-box grow'>
                   {/* Comming Soon */}
                   <img src='https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80' alt=''/>
                   </div>
               <div className='anuncios-box grow'>
               <img src ='https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' alt=''/>
               </div>
               <div className='anuncios-box grow'><img src ='https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' alt=''/>

               </div>
               <div className='anuncios-box grow'>
               <img src ='https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' alt=''/>
               </div>
               <div className='anuncios-box grow'>
               <img src ='https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' alt=''/>
               </div>
               <div className='anuncios-box grow'><img src ='https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' alt=''/></div>
               <div className='anuncios-box grow'><img src ='https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' alt=''/></div>
               <div className='anuncios-box grow'>
               <img src ='https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' alt=''/>
               </div>
               <div className='anuncios-box grow'>
               <img src ='https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' alt=''/>
               </div>
               </div>
        </header>
    )
}

export default LandinPage
