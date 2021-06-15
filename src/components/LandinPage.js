import React from 'react';
import { Link } from 'react-router-dom';

const LandinPage = () => {
    return (
        <header className='br2 ma2'>
          <div>
          <Link to='/auth'>Login</Link>
           <h1>Welcome</h1>
          </div>
           <div className='anuncios'>
               <div className='anuncios-box'>anuncios</div>
               <div className='anuncios-box'>anuncios</div>
               <div className='anuncios-box'>anuncios</div>
               <div className='anuncios-box'>anuncios</div>
               <div className='anuncios-box'>anuncios</div>
               <div className='anuncios-box'>anuncios</div>
               <div className='anuncios-box'>anuncios</div>
               <div className='anuncios-box'>anuncios</div>
               <div className='anuncios-box'>anuncios</div>
               </div>
        </header>
    )
}

export default LandinPage
