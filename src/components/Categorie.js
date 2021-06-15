import React from 'react'
import {Link} from 'react-router-dom'
const Categorie = () => {
  return (<>
       <div>
           <Link to='/'>Home</Link>
       </div>
    <div className="categoria">
        <div className="categoria-big-boz" >clip image to see</div>
     <div className="categoria-box" >titulo</div>
     <div className="categoria-box">Author</div>
     <div className="categoria-box">description</div>
     <div className="categoria-box">Time</div>
    </div>
    </>
  )
}

export default Categorie
